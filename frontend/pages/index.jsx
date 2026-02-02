import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Operations Platform</h1>
      <p>Choose a dashboard:</p>
      <div className="list">
        <Link href="/admin">Admin Control Center</Link>
        <Link href="/broker">Broker Workspace</Link>
        <Link href="/logistics">Logistics Dispatch</Link>
      </div>
    </main>
  );
}
