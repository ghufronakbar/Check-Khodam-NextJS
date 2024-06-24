import { Server } from "socket.io";

export const config = {
  api: {
    bodyParser: false,
  },
};

let io;

const handler = (req, res) => {
  if (!io) {
    io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      console.log("New client connected");

      socket.on("addKhodamCheck", (data) => {
        io.emit("newKhodamCheck", data);
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
  }
  res.end();
};

export default handler;
