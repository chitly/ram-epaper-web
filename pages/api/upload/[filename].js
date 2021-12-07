import multer from 'multer';
import { runMiddleware } from '../utils';

const getStorage = ({ filename }) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
      const filetype = file.mimetype.split('/')[1];
      cb(null, `${filename}.${filetype}`);
    },
  });

const handler = async (req, res) => {
  const { query, method } = req;
  if (method === 'POST') {
    const { filename } = query;
    const upload = multer({ storage: getStorage({ filename }) });
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
