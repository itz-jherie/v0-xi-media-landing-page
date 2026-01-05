"use server"

import { z } from "zod"

const schema = z.object({
    email: z.string().email(),
})

export async function subscribeToNewsletter(formData: FormData) {
    const email = formData.get("email")

    const result = schema.safeParse({ email })

    if (!result.success) {
        return { message: "Invalid email address", success: false }
    }

    const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID
    const FORM_ID = process.env.HUBSPOT_FORM_ID

    if (!PORTAL_ID || !FORM_ID) {
        return { message: "HubSpot credentials missing in .env.local", success: false }
    }

    try {
        const response = await fetch(
            `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fields: [
                        {
                            name: "email",
                            value: email,
                        },
                    ],
                    context: {
                        pageUri: "https://ximedia.io", // Update with actual URL if known or pass in from client
                        pageName: "Landing Page"
                    }
                }),
            }
        )

        if (!response.ok) {
            const errorData = await response.json()
            console.error("HubSpot error:", errorData)
            return { message: "Failed to subscribe. Please try again.", success: false }
        }

        return { message: "Thanks for downloading!", success: true }
    } catch (error) {
        console.error("Submission error:", error)
        return { message: "Something went wrong.", success: false }
    }
}
