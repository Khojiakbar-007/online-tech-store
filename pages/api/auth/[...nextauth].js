import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import path from 'path';
import fs from 'fs';
import { verifyPassword } from '../../../utils/api-utils';

export const authConfig = {
  providers: [
    CredentialsProvider({
      authorize: async credentials => {
        const { email, password } = credentials;
        const filePath = path.join(process.cwd(), 'data', 'accounts.json');
        const accountsJson = fs.readFileSync(filePath);
        const existingAccounts = JSON.parse(accountsJson);

        const account = existingAccounts.find(acc => acc.email === email);

        if (!account) {
          console.log('No account found!');
          throw new Error('No account found!');
        }

        const isValid = verifyPassword(password, account.password);

        if (!isValid) {
          console.log('Wrong email or password');
          throw new Error('Wrong email or password');
        }

        console.log('Signed user in!');
        return { email, name: account.name, account, nimadir: 'yana nimadir' };
      },
    }),
  ],
};

export default NextAuth(authConfig);
