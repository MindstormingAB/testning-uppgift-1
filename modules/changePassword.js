import users from './userData.js';
import { isPasswordSecure } from './createUser.js';

const changePassword = (username, oldPassword, newPassword) => {
  const user = users.find(u => u.username === username);

  if (!user) {
    return 'Användaren finns inte.';
  }

  if (user.password !== oldPassword) {
    return 'Felaktigt gammalt lösenord.';
  }

  if (oldPassword === newPassword) {
    return 'Det nya lösenordet får inte vara samma som det gamla.';
  }

  if (!isPasswordSecure(newPassword)) {
    return 'Det nya lösenordet uppfyller inte säkerhetskraven.';
  }

  user.password = newPassword;
  return true;
}

export default changePassword;