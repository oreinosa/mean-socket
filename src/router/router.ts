import { Router, Request, Response } from 'express';
import path = require('path');

const router = Router();

router.get('/', (req: Request, res: Response) => {
  // res.send('Hola mundo');
  res.sendFile(path.join(__dirname,'..','public'));
});

export default router;
