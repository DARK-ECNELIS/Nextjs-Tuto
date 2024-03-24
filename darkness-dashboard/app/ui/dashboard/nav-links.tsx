'use client'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// // Map of links to display in the side navigation.
// // Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: "/VectorHome.svg", alt: "Home icon" },
  { name: 'Commands', href: '/dashboard/commands', icon: "/VectorCommands.svg", alt: "Commands icon" },
  { name: 'Tickets', href: '/dashboard/tickets', icon: "/VectorBox.svg", alt: "Ticket icon" },
  { name: 'Canvas', href: '/dashboard/canvas', icon: "/VectorCanvas.svg", alt: "Canvas icon" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={pathname === link.href? "active" : link.href}
          >
          <div className='groupMenu'>
            <Image
              src={link.icon}
              alt={link.alt}
              // className="dark:invert"
              width={16}
              height={16}
              priority
              />
              <b className="hidden md:block">{link.name}</b>
            </div>
          </Link>
        );
      })}
    </>
  );
}
