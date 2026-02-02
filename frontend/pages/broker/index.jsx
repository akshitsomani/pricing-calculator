import DashboardLayout from '../../layouts/DashboardLayout.jsx';

export default function BrokerDashboard() {
  return (
    <DashboardLayout title="Broker Workspace" active="/broker">
      <div className="dashboard-grid">
        <section className="card">
          <h3>Broadcast Deals</h3>
          <p>Deals ready for buyer confirmation.</p>
          <div className="list">
            <div>Deal #B-204 • 3 forklifts • Pune</div>
            <div>Deal #B-207 • 10 laptops • Hyderabad</div>
          </div>
        </section>
        <section className="card">
          <h3>Buyer Tokens</h3>
          <p>Upload token proof and confirm commitment.</p>
          <div className="list">
            <div>Deal #B-201 • Token pending</div>
            <div>Deal #B-199 • Token received</div>
          </div>
        </section>
        <section className="card">
          <h3>Commission Tracker</h3>
          <p>Projected earnings from closed deals.</p>
          <div className="list">
            <div>This week: ₹1,12,000</div>
            <div>Monthly target: ₹4,50,000</div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
