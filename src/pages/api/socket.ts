import { NextApiRequest, NextApiResponse } from 'next';
import cors, { runMiddleware } from "@/utils/corsMiddleware";
import { Server as IOServer, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { Socket as NetSocket } from "net";

export const config = {
  api: {
    bodyParser: false,
  },
};

let io: IOServer | undefined;

interface KhodamCheckData {
  id: string;
  name: string;
  result: string;
}

interface ExtendedNextApiResponse extends NextApiResponse {
  socket: NetSocket & {
    server: HttpServer & {
      io?: IOServer;
    };
  };
}

const handler = async (req: NextApiRequest, res: ExtendedNextApiResponse) => {
  await runMiddleware(req, res, cors);

  if (!res.socket.server.io) {
    const httpServer: HttpServer = res.socket.server as HttpServer;
    io = new IOServer(httpServer);
    res.socket.server.io = io;

    io.on("connection", (socket: Socket) => {      
      
      socket.on("addKhodamCheck", (data: KhodamCheckData) => {
        io?.emit("newKhodamCheck", data);
      });

      socket.on("disconnect", () => {        
      });
    });
  }

  res.end();
};

export default handler;
