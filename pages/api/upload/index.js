// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import multer from 'multer';
import { runMiddleware } from '../utils';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const handler = async (req, res) => {
  const upload = multer({ storage });
  await runMiddleware(req, res, upload.single('imageFile'));
  if (req.method === 'POST') {
    console.log('body', req.body);
    console.log('file', req.file);
    res.status(200).json({
      name: req.file.filename,
      status: 'done',
      url: req.file.path,
    });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
