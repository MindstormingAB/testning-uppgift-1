import users from './userData.js';

const login = (username, password) => {
  if (!username || !password) {
    return 'Användarnamn och lösenord krävs.';
  }

  const user = users.find(u => u.username === username);
  if (user && user.password === password) {
    return true;
  } else {
    return 'Felaktigt användarnamn eller lösenord.';
  }
}

export default login;
