"use client"

import { useState } from "react"
import { subscribeToNewsletter } from "@/app/actions"
import { Loader2 } from "lucide-react"

export function SubscriptionForm() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus("loading")
        setMessage("")

        const formData = new FormData()
        formData.append("email", email)

        const result = await subscribeToNewsletter(formData)

        if (result.success) {
            setStatus("success")
            setMessage(result.message)
            setEmail("")

            // Trigger PDF download
            const link = document.createElement("a")
            link.href = "/THE SIMPLE SYSTEM FOR SOCIAL MEDIA GROWTH.pdf"
            link.download = "THE SIMPLE SYSTEM FOR SOCIAL MEDIA GROWTH.pdf"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } else {
            setStatus("error")
            setMessage(result.message)
        }
    }

    if (status === "success") {
        return (
            <div className="flex flex-row items-center justify-center p-3 bg-[#0a0a0a] rounded-full border border-[#00e0b6]/30 text-[#00e0b6] text-sm font-medium animate-in fade-in slide-in-from-bottom-2 w-full max-w-[380px]">
                {message}
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-2 w-full max-w-[380px] mx-auto lg:mx-0">
            <form
                onSubmit={handleSubmit}
                className="flex flex-row items-center w-full bg-[#050505] rounded-full border border-white/10 pl-4 pr-1.5 py-1.5 focus-within:border-[#00e0b6]/50 transition-all"
            >
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="flex-grow min-w-0 bg-transparent py-2 text-white text-sm focus:outline-none placeholder:text-white/20"
                    required
                    disabled={status === "loading"}
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="shrink-0 bg-[#00e0b6] hover:bg-[#00e0b6]/90 text-[#0a0a0a] font-semibold px-6 py-2 rounded-full transition-all whitespace-nowrap text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {status === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
                    Download
                </button>
            </form>
            {status === "error" && (
                <p className="text-red-400 text-[10px] px-4">{message}</p>
            )}
        </div>
    )
}
