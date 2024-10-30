const readline = require('readline')
const logIn = require('./modules/logIn')
const { createUser } = require('./modules/createUser')
const changePassword = require('./modules/changePassword')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const mainMenu = () => {
  console.log('\nVälj ett alternativ:')
  console.log('1. Logga in')
  console.log('2. Skapa ny användare')
  console.log('3. Ändra lösenord')
  console.log('4. Avsluta')

  rl.question('Ditt val: ', (answer) => {
    switch (answer) {
      case '1':
        promptLogin()
        break
      case '2':
        promptCreateUser()
        break
      case '3':
        promptChangePassword()
        break
      case '4':
        rl.close()
        break
      default:
        console.log('Ogiltigt val, försök igen.')
        mainMenu()
    }
  })
}

const promptLogin = () => {
  rl.question('Användarnamn: ', (username) => {
    rl.question('Lösenord: ', (password) => {
      const result = logIn(username, password)
      console.log(result === true ? 'Inloggning lyckades!' : result)
      mainMenu()
    })
  })
}

const promptCreateUser = () => {
  rl.question('Ange nytt användarnamn: ', (username) => {
    rl.question('Ange nytt lösenord: ', (password) => {
      const result = createUser(username, password)
      console.log(result instanceof Object ? 'Användare skapad!' : result)
      mainMenu()
    })
  })
}

const promptChangePassword = () => {
  rl.question('Användarnamn: ', (username) => {
    rl.question('Gammalt lösenord: ', (oldPassword) => {
      rl.question('Nytt lösenord: ', (newPassword) => {
        const result = changePassword(username, oldPassword, newPassword)
        console.log(result === true ? 'Lösenord ändrat!' : result)
        mainMenu()
      })
    })
  })
}

mainMenu()
