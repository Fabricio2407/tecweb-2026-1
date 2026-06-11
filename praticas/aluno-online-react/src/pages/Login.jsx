import { useState } from "react";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorSenha, setErrorSenha] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setErrorEmail("");
    setErrorSenha("");

    if (email.trim() === "") {
      setErrorEmail("O campo de email é obrigatório.");
    }

    if (senha.trim() === "") {
      setErrorSenha("O campo de senha é obrigatório.");
    }
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <img className="login-card__logo" src="/avatar.svg" alt="Logo Aluno Online" />
        <h1 id="login-title">Aluno Online</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <InputEmail
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={errorEmail}
          />
          <InputSenha
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            error={errorSenha}
          />
          <button type="submit">Entrar</button>
        </form>
      </section>

      <footer className="login-footer">© 2026. Todos os direitos reservados.</footer>
    </main>
  );
}

export default Login;
