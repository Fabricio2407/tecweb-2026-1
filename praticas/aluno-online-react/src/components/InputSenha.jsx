import "./InputSenha.css";

function InputSenha({ value, onChange, error }) {
  return (
    <div className="input-senha">
      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        name="senha"
        type="password"
        value={value}
        onChange={onChange}
        placeholder="Digite sua senha"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "senha-error" : undefined}
      />
      {error && (
        <p className="input-senha__error" id="senha-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputSenha;
