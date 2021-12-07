// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  const { filename } = query;
  const upload = multer({ storage: getStorage({ filename }) });
  await runMiddleware(req, res, upload.single('imageFile'));

  if (method === 'POST') {
    const {
      file: { filename, path },
    } = req;
    const idx = path.indexOf('/');
    const url = path.slice(idx + 1);
    res.status(200).json({
      name: filename,
      status: 'done',
      url,
    });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
