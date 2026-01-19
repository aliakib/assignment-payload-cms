import type { Block } from 'payload';

export const Testimonials: Block = {
    slug: 'testimonials',
    labels: {
        singular: 'Testimonial Section',
        plural: 'Testimonials Section',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
            defaultValue: 'What our customers say',
        },
        {
            name: 'items',
            type: 'array',
            label: 'Testimonials',
            required: true,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'role',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'rating',
                    type: 'select',
                    required: true,
                    options: [
                        { label: '⭐ 1 Star', value: '1' },
                        { label: '⭐⭐ 2 Stars', value: '2' },
                        { label: '⭐⭐⭐ 3 Stars', value: '3' },
                        { label: '⭐⭐⭐⭐ 4 Stars', value: '4' },
                        { label: '⭐⭐⭐⭐⭐ 5 Stars', value: '5' },
                    ],
                    defaultValue: '5',
                },
                {
                    name: 'message',
                    type: 'textarea',
                    required: true,
                },
            ],
        },
    ],
};
