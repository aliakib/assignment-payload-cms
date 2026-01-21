'use client'

import Link from 'next/link'
import React from 'react'

interface PropTypes {
    to: string
}

export default function AnimatedLink(props: PropTypes) {

    const { to } = props

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.classList.remove('animate-zoom-in-out')
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.classList.add('animate-zoom-in-out')
    }

    return (
        <Link
            href={to}
            className="admin animate-zoom-in-out"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Explore Super Cars Page
        </Link>
    )
}
