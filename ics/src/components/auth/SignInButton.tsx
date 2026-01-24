'use client'

import { handleGoogleSignIn } from "@/app/actions/auth"
import { ArrowRight } from "lucide-react"

export function SignInButton() {
    return (
        <button
            onClick={() => handleGoogleSignIn()}
            className="w-full py-4 bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
        >
            <img src="https://authjs.dev/img/providers/google.svg" alt="Google" className="w-6 h-6" />
            <span>Sign in with Google</span>
            <ArrowRight size={20} className="text-gray-400" />
        </button>
    )
}
