const { createUser } = require('../modules/createUser')
const users = require('../modules/userData')

describe('testar createUser funktionen', () => {
  beforeEach(() => {
    users.length = 0
    users.push({ username: 'ExistingUser', password: 'Password1' })
  })

  it('Skapa användare med unikt användarnamn och säkert lösenord', () => {
    const result = createUser('NewUser', 'SecurePass1')
    expect(result.username).toBe('NewUser')
    expect(users.length).toBe(2)
  })

  it('Skapa användare med unikt användarnamn med mellanslag och säkert lösenord', () => {
    const result = createUser('New User', 'SecurePass1')
    expect(result.username).toBe('New User')
    expect(users.length).toBe(2)
  })

  it('Försök att skapa användare med befintligt användarnamn', () => {
    const result = createUser('ExistingUser', 'SecurePass1')
    expect(result).toBe('Användarnamnet används redan.')
  })

  it('Försök att skapa användare utan användarnamn', () => {
    const result = createUser('', 'SecurePass1')
    expect(result).toBe('Användarnamn och lösenord krävs.')
  })

  it('Försök att skapa användare utan lösenord', () => {
    const result = createUser('NewUser', '')
    expect(result).toBe('Användarnamn och lösenord krävs.')
  })

  it('Försök att skapa användare utan några uppgifter', () => {
    const result = createUser('', '')
    expect(result).toBe('Användarnamn och lösenord krävs.')
  })

  it('Försök att skapa användare med för kort lösenord', () => {
    const result = createUser('UniqueUser', 'pass')
    expect(result).toBe('Lösenordet uppfyller inte säkerhetskraven.')
  })

  it('Försök att skapa användare med lösenord utan stor bokstav', () => {
    const result = createUser('UniqueUser', 'securepass1')
    expect(result).toBe('Lösenordet uppfyller inte säkerhetskraven.')
  })

  it('Försök att skapa användare med lösenord utan siffra', () => {
    const result = createUser('UniqueUser', 'SecurePass')
    expect(result).toBe('Lösenordet uppfyller inte säkerhetskraven.')
  })
})
