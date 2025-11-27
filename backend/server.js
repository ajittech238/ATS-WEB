const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const applicationRoutes = require("./routes/applicationRoutes");
const ideaRoutes = require("./routes/ideaRoutes");
const nonTechRoutes = require("./routes/nonTechRoutes");

const app = express();
const http = require("http").Server(app);
const { Server } = require("socket.io");
const io = new Server(http, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
global.io = io;
io.on("connection", (socket) => {
  console.log("🔌 SOCKET CONNECTED:", socket.id);
});
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
connectDB();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", applicationRoutes);
app.use("/api", ideaRoutes);
app.use("/api", nonTechRoutes);
app.get("/", (req, res) => {
  res.send("ATS GLOBAL TECH backend is running...");
});
http.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
