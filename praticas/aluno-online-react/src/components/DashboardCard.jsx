import "./DashboardCard.css";

function DashboardCard({ title, items }) {
  return (
    <section className="dashboard-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default DashboardCard;
