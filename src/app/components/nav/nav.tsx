import Link from "next/link";

export default function Nav() {
    const links = [
        { href: '/', name: 'Home' },
        { href: '/posts', name: 'Posts' }
    ]

    return (
        <nav className="absolute top-0 inset-x-0 flex justify-center">
            {
                links.map(link => (
                    <Link key={link.name} href={link.href} className="p-4">{link.name}</Link>
                ))
            }
        </nav>

    )
}