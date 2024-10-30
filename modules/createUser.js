import User from './User';
import users from './userData';

const isPasswordSecure = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}

const createUser = (username, password) => {
  if (users.find(u => u.username === username)) {
    return 'Användarnamnet används redan.';
  }

  if (!isPasswordSecure(password)) {
    return 'Lösenordet uppfyller inte säkerhetskraven.';
  }

  const newUser = new User(username, password);
  users.push(newUser);
  return newUser;
}

export default createUser;
