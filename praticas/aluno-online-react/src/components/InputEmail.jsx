import "./InputEmail.css";

function InputEmail({ value, onChange, error }) {
  return (
    <div className="input-email">
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        value={value}
        onChange={onChange}
        placeholder="Digite seu e-mail"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "email-error" : undefined}
      />
      {error && (
        <p className="input-email__error" id="email-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputEmail;
