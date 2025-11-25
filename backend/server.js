
// // // // backend/server.js
// // // const express = require("express");
// // // const cors = require("cors");
// // // const connectDB = require("./config/db");
// // // const applicationRoutes = require("./routes/applicationRoutes");

// // // const app = express();

// // // // Create HTTP + WebSocket server
// // // const http = require("http").createServer(app);
// // // const { Server } = require("socket.io");

// // // // ⛔ यहाँ origin:* गलत था → WebSocket block करता है
// // // // ✅ सही CORS सिर्फ React के लिए खोलो
// // // const io = new Server(http, {
// // //   cors: {
// // //     origin: "http://localhost:5173",   // ← React Vite runs here
// // //     methods: ["GET", "POST"],
// // //     credentials: true
// // //   }
// // // });

// // // // Make global
// // // global.io = io;

// // // io.on("connection", (socket) => {
// // //   console.log("🔌 SOCKET CONNECTED:", socket.id);
// // // });

// // // // Middlewares
// // // app.use(cors({
// // //   origin: "http://localhost:5173",
// // //   credentials: true
// // // }));

// // // app.use(express.json());
// // // connectDB();

// // // app.use("/uploads", express.static("uploads"));

// // // // Routes
// // // app.use("/api", applicationRoutes);

// // // // Start server
// // // http.listen(5000, () => {
// // //   console.log("🚀 Server running on port 5000");
// // // });


// // // // backend/server.js
// // // const express = require("express");
// // // const cors = require("cors");
// // // const connectDB = require("./config/db");

// // // const applicationRoutes = require("./routes/applicationRoutes");
// // // const ideaRoutes = require("./routes/ideaRoutes");   // ← New route

// // // const app = express();

// // // // Create HTTP + WebSocket server
// // // const http = require("http").createServer(app);
// // // const { Server } = require("socket.io");

// // // // WebSocket CORS fix → Only React Vite origin allowed
// // // const io = new Server(http, {
// // //   cors: {
// // //     origin: "http://localhost:5173",
// // //     methods: ["GET", "POST"],
// // //     credentials: true
// // //   }
// // // });

// // // // Make socket.io global
// // // global.io = io;

// // // io.on("connection", (socket) => {
// // //   console.log("🔌 SOCKET CONNECTED:", socket.id);
// // // });

// // // // Middlewares
// // // app.use(cors({
// // //   origin: "http://localhost:5173",
// // //   credentials: true
// // // }));

// // // app.use(express.json());
// // // connectDB();

// // // app.use("/uploads", express.static("uploads"));

// // // // Existing Routes
// // // app.use("/api", applicationRoutes);

// // // // ⭐ New IdeaBank Route
// // // app.use("/api", ideaRoutes);

// // // // Health check
// // // app.get("/", (req, res) => {
// // //   res.send("ATS GLOBAL TECH backend is running...");
// // // });

// // // // Start Server
// // // http.listen(5000, () => {
// // //   console.log("🚀 Server running on port 5000");
// // // });



//  // backend/server.js
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");

// const applicationRoutes = require("./routes/applicationRoutes");
// const ideaRoutes = require("./routes/ideaRoutes");
// const nonTechRoutes = require("./routes/nonTechRoutes");

// const app = express();

// // Create HTTP + WebSocket server
// const http = require("http").createServer(app);
// const { Server } = require("socket.io");

// // WebSocket CORS
// const io = new Server(http, {
//   cors: {
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// // Make socket global
// global.io = io;

// // Socket connection log
// io.on("connection", (socket) => {
//   console.log("🔌 SOCKET CONNECTED:", socket.id);
// });

// // Express CORS
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// // Body parser
// app.use(express.json());

// // DB connect
// connectDB();

// // Static files
// app.use("/uploads", express.static("uploads"));

// // Routes
// app.use("/api", applicationRoutes);
// app.use("/api", ideaRoutes);
// app.use("/api", nonTechRoutes);

// // Health check
// app.get("/", (req, res) => {
//   res.send("ATS GLOBAL TECH backend is running...");
// });

// // Server Start
// http.listen(5000, () => {
//   console.log("🚀 Server running on port 5000");
// });


// // backend/server.js
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const path = require("path");

// const applicationRoutes = require("./routes/applicationRoutes");
// const ideaRoutes = require("./routes/ideaRoutes");
// const nonTechRoutes = require("./routes/nonTechRoutes");

// const app = express();

// // Create HTTP + WebSocket server
// const http = require("http").createServer(app);
// const { Server } = require("socket.io");

// // WebSocket CORS
// const io = new Server(http, {
//   cors: {
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// // Make socket global
// global.io = io;

// // Socket connection log
// io.on("connection", (socket) => {
//   console.log("🔌 SOCKET CONNECTED:", socket.id);
// });

// // Express CORS
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// // Body parser
// app.use(express.json());

// // DB connect
// connectDB();

// // ✅ FIXED STATIC PATH (VERY IMPORTANT)
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Routes
// app.use("/api", applicationRoutes);
// app.use("/api", ideaRoutes);
// app.use("/api", nonTechRoutes);

// // Health check
// app.get("/", (req, res) => {
//   res.send("ATS GLOBAL TECH backend is running...");
// });

// // Server Start
// http.listen(5000, () => {
//   console.log("🚀 Server running on port 5000");
// });


// backend/server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const applicationRoutes = require("./routes/applicationRoutes");
const ideaRoutes = require("./routes/ideaRoutes");
const nonTechRoutes = require("./routes/nonTechRoutes");

const app = express();

// ⭐ Correct WebSocket Server Initialization
const http = require("http").Server(app);
const { Server } = require("socket.io");

// ⭐ Correct Socket.io Configuration
const io = new Server(http, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Make socket global
global.io = io;

// Socket connection log
io.on("connection", (socket) => {
  console.log("🔌 SOCKET CONNECTED:", socket.id);
});

// Express CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Body parser
app.use(express.json());

// DB connect
connectDB();

// Static path
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", applicationRoutes);
app.use("/api", ideaRoutes);
app.use("/api", nonTechRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("ATS GLOBAL TECH backend is running...");
});

// Start Server
http.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
