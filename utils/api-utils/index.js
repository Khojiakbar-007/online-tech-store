import { hashSync, compareSync } from 'bcryptjs';

const hashPassword = password => {
  const hashedPassword = hashSync(password, 12);
  return hashedPassword;
};

const verifyPassword = (password, hashedPassword) => {
  const isValid = compareSync(password, hashedPassword);
  return isValid;
};

export { hashPassword, verifyPassword };
