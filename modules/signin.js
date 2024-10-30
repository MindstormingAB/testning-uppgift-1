const users = require('./userData')

const signin = (username, password) => {
  if (!username || !password) {
    return 'Användarnamn och lösenord krävs.'
  }

  const user = users.find(u => u.username === username)
  if (user && user.password === password) {
    return true
  } else {
    return 'Felaktigt användarnamn eller lösenord.'
  }
}

module.exports = signin