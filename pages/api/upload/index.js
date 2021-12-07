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
  const { method } = req;
  if (method === 'POST') {
    const upload = multer({ storage });
    await runMiddleware(req, res, upload.single('imageFile'));

    const {
      file: { filename, path },
    } = req;

    res.status(200).json({
      status: 'done',
      filename,
      path,
    });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
