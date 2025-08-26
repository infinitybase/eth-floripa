import Link from 'next/link';

const navItems = [
  { label: 'Schedule', href: '#schedule' },
  { label: 'Venue', href: '#venue' },
  { label: 'Sponsors', href: '#sponsors' },
];

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-[var(--header-height)] border-[#15151514] border-b bg-background">
      <nav className="py-4">
        <ul className="flex items-center justify-center gap-5 lg:gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium text-foreground/60 text-sm transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
