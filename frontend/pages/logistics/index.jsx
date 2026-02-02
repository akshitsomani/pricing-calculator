import DashboardLayout from '../../layouts/DashboardLayout.jsx';

export default function LogisticsDashboard() {
  return (
    <DashboardLayout title="Logistics Dispatch" active="/logistics">
      <div className="dashboard-grid">
        <section className="card">
          <h3>Pickup Schedule</h3>
          <p>Today's confirmed pickups.</p>
          <div className="list">
            <div>09:00 • Deal #L-303 • Warehouse A</div>
            <div>13:30 • Deal #L-308 • Hub C</div>
          </div>
        </section>
        <section className="card">
          <h3>Item Checklist</h3>
          <p>Ensure inspection steps are completed.</p>
          <div className="list">
            <div>Photos captured</div>
            <div>Serials verified</div>
            <div>Inspection video uploaded</div>
          </div>
        </section>
        <section className="card">
          <h3>Delivery Status</h3>
          <p>Monitor in-transit and delivered assets.</p>
          <div className="list">
            <div>In Transit: 4</div>
            <div>Delivered: 12</div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
