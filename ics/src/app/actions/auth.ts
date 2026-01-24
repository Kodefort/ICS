'use server'
import { signIn } from "@/auth"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { AuthError } from "next-auth"

export async function handleGoogleSignIn() {
    await signIn("google")
}

export async function handleCredentialSignIn(formData: FormData) {
    try {
        await signIn("credentials", formData)
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Invalid credentials.' }
                default:
                    return { error: 'Something went wrong.' }
            }
        }
        throw error
    }
}

export async function handleSignUp(formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const name = formData.get("name") as string

    if (!email || !password || !name) {
        return { error: "Missing fields" }
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
        where: { email }
    })

    if (existingUser) {
        return { error: "User already exists with this email." }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            }
        })
        console.log(`[Auth] User created successfully: ${email}`);
        return { success: "Account created! Please sign in." }
    } catch (error) {
        console.error(`[Auth] Failed to create account for ${email}:`, error);
        return { error: "Failed to create account." }
    }
}
