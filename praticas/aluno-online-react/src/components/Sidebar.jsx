import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Notas",
    "Faltas",
    "Boletos",
    "Requerimentos",
    "Sair",
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <img src="/avatar.svg" alt="Avatar do aluno" className="sidebar__logo" />
        <h1>Aluno Online</h1>
      </div>

      <nav className="sidebar__nav" aria-label="Menu principal">
        <ul>
          {menuItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
