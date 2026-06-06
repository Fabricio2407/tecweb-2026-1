import DashboardCard from "../components/DashboardCard";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./Dashboard.css";

const cards = [
  {
    title: "Mural de Avisos",
    items: [
      "Inscrição para o projeto de extensão",
      "Eleição para representante de turma",
    ],
  },
  {
    title: "Calendário Acadêmico",
    items: [
      "23/02 - Início do período letivo 2026-1",
      "25/04 - Prazo final para aplicação da P1",
      "23/06 - Prazo final para aplicação da P2",
      "04/07 - Fim do período letivo 2026-1",
    ],
  },
  {
    title: "Minhas Disciplinas",
    items: ["Bancos de Dados I", "Estrutura de Dados", "Programação Web"],
  },
];

function Dashboard() {
  return (
    <>
      <Sidebar />
      <main className="dashboard">
        <Topbar />

        <div className="dashboard__intro">
          <p>Bem-vindo ao portal do aluno</p>
        </div>

        <div className="dashboard__cards">
          {cards.map((card) => (
            <DashboardCard
              key={card.title}
              title={card.title}
              items={card.items}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Dashboard;
