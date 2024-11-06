import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.userData = { userId: decodedToken.userId, email: decodedToken.email };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};