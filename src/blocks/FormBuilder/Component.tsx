'use client'

import React, { useState } from 'react'
import { Field } from './Field'
import { Toast } from '@/components/Toast'
import { getClientSideURL } from '@/utilities/getURL'
import { FormBuilderBlock as FormBuilderBlockType } from '@/payload-types'

export const FormBuilderBlock: React.FC<FormBuilderBlockType> = ({
    heading,
    description,
    fullName,
    email,
    mobile,
    message,
    submitButtonLabel = 'Send Message',
    actions,
}) => {
    const [submitted, setSubmitted] = useState(false)

    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState<null | { message: string; type: 'success' | 'error' }>(null)

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (loading) return
        e.preventDefault()
        setLoading(true)

        const form = e.currentTarget
        const formData = new FormData(form)

        const payload = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            mobile: formData.get('mobile'),
            message: formData.get('message'),
        }

        // --- Client-side validation ---
        if (!payload.fullName || !payload.email || !payload.mobile || !payload.message) {
            setToast({ message: 'Please fill all fields', type: 'error' })
            setLoading(false)
            return
        }

        try {
            const res = await fetch(`${getClientSideURL()}/api/form-submissions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!res.ok) throw new Error()

            setToast({ message: 'Form submitted successfully!', type: 'success' })
            setSubmitted(true);
            form.reset()
        } catch {
            setToast({ message: 'Failed to send message', type: 'error' })
        } finally {
            setLoading(false)
            setTimeout(() => setToast(null), 3000)
        }
    }

    if (submitted) {
        return (
            <div className="container py-4 text-center">
                <p className="text-lg font-medium text-green-600">
                    {actions?.successMessage || 'Thank you!'}
                </p>
                {toast && <Toast {...toast} />}
            </div>
        )
    }

    return (
        <section className="container py-8">
            {heading && (
                <h2 className="text-3xl font-semibold mb-2 text-center">
                    {heading}
                </h2>
            )}

            {description && (
                <p className="text-gray-600 dark:text-gray-300 mb-10 text-center max-w-xl mx-auto">
                    {description}
                </p>
            )}

            <form
                onSubmit={onSubmit}
                className="max-w-xl mx-auto space-y-6"
            >
                {/* Full Name */}
                {fullName && (
                    <Field
                        type="text"
                        name="fullName"
                        {...fullName}
                    />
                )}

                {/* Email */}
                {email && (
                    <Field
                        type="email"
                        name="email"
                        {...email}
                    />
                )}

                {/* Mobile */}
                {mobile && (
                    <Field
                        type="tel"
                        name="mobile"
                        {...mobile}
                    />
                )}

                {/* Message */}
                {message && (
                    <Field
                        textarea
                        name="message"
                        {...message}
                    />
                )}

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full border border-white text-white py-3 rounded-md font-medium hover:bg-white hover:text-black transition duration-200"
                >
                    {loading ? 'Submitting...' : submitButtonLabel}
                </button>
            </form>
            {toast && <Toast {...toast} />}
        </section>
    )
}
