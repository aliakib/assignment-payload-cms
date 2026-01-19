import Image from 'next/image'
import Link from 'next/link'
import type { Header as HeaderType } from '@/payload-types'

type Props = {
    data: HeaderType
}

export const Header = ({ data }: Props) => {
    const { logo, navItems } = data

    return (
        <header className="w-full fixed z-10 bg-gradient-to-b from-black/75 to-transparent">
            <div className="container flex items-center justify-between py-4">
                {/* Logo */}
                {logo && typeof logo === 'object' && (
                    <Link href="/">
                        <Image
                            src={logo.url || ""}
                            alt={logo.alt ?? 'Logo'}
                            width={120}
                            height={40}
                        />
                    </Link>
                )}

                {/* Navigation */}
                <nav className="flex gap-6">
                    {navItems?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link.url || ""}
                            className="text-sm font-medium text-white hover:underline"
                        >
                            {item.link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
