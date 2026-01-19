import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
    slug: 'form-submissions',
    admin: {
        useAsTitle: 'fullName',
    },
    access: {
        create: () => true, // public submit
        read: ({ req }) => !!req.user, // admin only
    },
    fields: [
        {
            name: 'fullName',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'mobile',
            type: 'text',
            required: true,
        },
        {
            name: 'message',
            type: 'textarea',
            required: true,
        },
    ],
}
