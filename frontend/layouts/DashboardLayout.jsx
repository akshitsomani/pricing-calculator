import Link from 'next/link';

const navItems = [
  { href: '/admin', label: 'Admin' },
  { href: '/broker', label: 'Broker' },
  { href: '/logistics', label: 'Logistics' }
];

export default function DashboardLayout({ title, children, active }) {
  return (
    <main>
      <div className="toolbar">
        <div>
          <span className="badge">Operations Platform</span>
          <h1>{title}</h1>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={active === item.href ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {children}
    </main>
  );
}
