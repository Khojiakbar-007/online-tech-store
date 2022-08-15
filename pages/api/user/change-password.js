import { unstable_getServerSession } from 'next-auth';
import { authConfig } from '../auth/[...nextauth]';

const handler = (req, res) => {
  console.log('zapros ketvotti');
  if (req.method !== 'PATCH') {
    return;
  }

  const session = unstable_getServerSession(req, res, authConfig);

  if (!session) {
    console.log("zapros avtorizatsiyadan o'tmadi");
    res.status(403).json({ message: 'Пошёл на ...' });
    return;
  }
  console.log("zapros avtorizatsiyadan o'tdi");
};

export default handler;
