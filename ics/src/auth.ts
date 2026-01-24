import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { z } from "zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const parsedCredentials = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials)

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data
                    console.log(`[Auth] Attempting login for: ${email}`);

                    const user = await prisma.user.findUnique({
                        where: { email }
                    })

                    if (!user) {
                        console.log(`[Auth] User not found: ${email}`);
                        return null;
                    }

                    if (!user.password) {
                        console.log(`[Auth] User has no password set (likely OAuth user): ${email}`);
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password)

                    if (passwordsMatch) {
                        console.log(`[Auth] Login successful for: ${email}`);
                        return user;
                    } else {
                        console.log(`[Auth] Password mismatch for: ${email}`);
                    }
                } else {
                    console.log("[Auth] Invalid input format");
                }

                console.log("Invalid credentials returned");
                return null
            }
        })
    ],
    callbacks: {
        authorized: async ({ auth }) => {
            // Logged in users are authenticated, otherwise redirect to login page
            return !!auth
        },
    },
})
