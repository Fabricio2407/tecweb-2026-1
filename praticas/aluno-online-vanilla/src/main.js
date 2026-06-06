import './style.css'

const loginForm = document.getElementById('login-form')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()

  emailError.textContent = ''
  passwordError.textContent = ''

  const emailValue = emailInput.value.trim()
  const passwordValue = passwordInput.value.trim()

  let hasError = false

  if (!emailValue) {
    emailError.textContent = 'O campo de email é obrigatório.'
    hasError = true
  }

  if (!passwordValue) {
    passwordError.textContent = 'O campo de senha é obrigatório.'
    hasError = true
  }

  if (!hasError) {
    emailError.textContent = ''
    passwordError.textContent = ''
  }
})
