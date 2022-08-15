// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path';
import fs from 'fs';
import { hashPassword } from '../../../utils/api-utils';

export default function handler(req, res) {
  if (req.method !== 'POST') return;

  const {
    body: { email, password },
  } = req;

  const filePath = path.join(process.cwd(), 'data', 'accounts.json');
  const accountsJson = fs.readFileSync(filePath);
  const existingAccounts = JSON.parse(accountsJson);

  // check if email is used
  const emailExists = existingAccounts.find(acc => acc.email === email);
  if (emailExists) {
    res
      .status(422)
      .json({ message: 'User with such an email already exists.' });

    return;
  }

  existingAccounts.push({
    ...req.body,
    password: hashPassword(password),
  });
  fs.writeFileSync(filePath, JSON.stringify(existingAccounts));
  res.status(201).json({ message: 'Created successfully!' });
}
