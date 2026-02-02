import DashboardLayout from '../../layouts/DashboardLayout.jsx';

export default function AdminDashboard() {
  return (
    <DashboardLayout title="Admin Control Center" active="/admin">
      <div className="dashboard-grid">
        <section className="card">
          <h3>Live Deal Pipeline</h3>
          <p>Track all active deals across the FSM.</p>
          <div className="list">
            <div>Requirement Created: 14</div>
            <div>Seller Verified: 9</div>
            <div>Broadcasted: 6</div>
            <div>Picked Up: 3</div>
          </div>
        </section>
        <section className="card">
          <h3>Today's Pickups</h3>
          <p>Upcoming logistics tasks requiring attention.</p>
          <div className="list">
            <div>08:30 • Deal #A-1093 • Mumbai</div>
            <div>11:00 • Deal #A-1107 • Pune</div>
            <div>15:45 • Deal #A-1129 • Delhi</div>
          </div>
        </section>
        <section className="card">
          <h3>Settlement Queue</h3>
          <p>Payments ready for release or verification.</p>
          <div className="list">
            <div>Deal #A-1088 • ₹1,24,000</div>
            <div>Deal #A-1102 • ₹87,500</div>
            <div>Deal #A-1111 • ₹2,10,300</div>
          </div>
        </section>
        <section className="card">
          <h3>Cancellations</h3>
          <p>Recent cancellations awaiting review.</p>
          <div className="list">
            <div>Deal #A-1077 • Buyer no-show</div>
            <div>Deal #A-1099 • Seller mismatch</div>
          </div>
        </section>
        <section className="card">
          <h3>Broker Performance</h3>
          <p>Leaderboard by close rate & commission.</p>
          <div className="list">
            <div>Zenith Brokers • 18 deals</div>
            <div>Orbit Trade • 15 deals</div>
            <div>Nova Agents • 12 deals</div>
          </div>
        </section>
        <section className="card">
          <h3>Revenue Analytics</h3>
          <p>Gross margin and logistics costs.</p>
          <div className="list">
            <div>Platform Margin: ₹4.2M</div>
            <div>Broker Commission: ₹2.7M</div>
            <div>Logistics Fee: ₹1.1M</div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
