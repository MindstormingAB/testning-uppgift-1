const User = require('./User')
const users = require('./userData')

const isPasswordSecure = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/
  return regex.test(password)
}

const createUser = (username, password) => {
  if (!username || !password) {
    return 'Användarnamn och lösenord krävs.'
  }

  if (users.find(u => u.username === username)) {
    return 'Användarnamnet används redan.'
  }

  if (!isPasswordSecure(password)) {
    return 'Lösenordet uppfyller inte säkerhetskraven.'
  }

  const newUser = new User(username, password)
  users.push(newUser)
  return newUser
}

module.exports = { createUser, isPasswordSecure }
