// pages/api/protected-route.ts
import { auth } from '@clerk/nextjs/server';

export default function handler(req, res) {
  const { userId } = auth(req);

  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.status(200).json({ message: 'This is a protected route', userId });
}
