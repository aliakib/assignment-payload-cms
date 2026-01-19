import type { Block } from 'payload'

export const FormBuilder: Block = {
    slug: 'formBuilder',
    labels: {
        singular: 'Form',
        plural: 'Forms',
    },

    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
            defaultValue: 'Contact Us',
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'fullName',
            type: 'group',
            label: 'Full Name Field',
            fields: [
                { name: 'label', type: 'text', defaultValue: 'Full Name' },
                { name: 'required', type: 'checkbox', defaultValue: true },
                { name: 'placeholder', type: 'text' },
            ],
        },

        {
            name: 'email',
            type: 'group',
            label: 'Email Field',
            fields: [
                { name: 'label', type: 'text', defaultValue: 'Email' },
                { name: 'required', type: 'checkbox', defaultValue: true },
                { name: 'placeholder', type: 'text', defaultValue: 'you@example.com' },
            ],
        },

        {
            name: 'mobile',
            type: 'group',
            label: 'Mobile Number Field',
            fields: [
                { name: 'label', type: 'text', defaultValue: 'Mobile Number' },
                { name: 'required', type: 'checkbox', defaultValue: true },
                { name: 'placeholder', type: 'text', defaultValue: '+91 XXXXX XXXXX' },
            ],
        },

        {
            name: 'message',
            type: 'group',
            label: 'Message Field',
            fields: [
                { name: 'label', type: 'text', defaultValue: 'Message' },
                { name: 'required', type: 'checkbox', defaultValue: true },
                { name: 'placeholder', type: 'text' },
            ],
        },

        // ---- Submit Button ----
        {
            name: 'submitButtonLabel',
            type: 'text',
            defaultValue: 'Send Message',
        },

        // ---- Actions ----
        {
            name: 'actions',
            type: 'group',
            label: 'After Submit Actions',
            fields: [
                {
                    name: 'saveToDatabase',
                    type: 'checkbox',
                    defaultValue: true,
                },
                {
                    name: 'sendEmail',
                    type: 'checkbox',
                    defaultValue: true,
                },
                {
                    name: 'successMessage',
                    type: 'text',
                    defaultValue: 'Thank you! We will contact you shortly.',
                },
            ],
        },
    ],
}
