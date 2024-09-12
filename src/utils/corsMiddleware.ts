import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

const cors = Cors({
  methods: ["GET", "HEAD", "POST", "OPTIONS"],
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization"],
});

type MiddlewareCallback = (err?: Error | null) => void;

type MiddlewareFunction = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: MiddlewareCallback
) => void;

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: MiddlewareFunction
) {
  return new Promise<void>((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve();
    });
  });
}

export default cors;
export { runMiddleware };
