const express = require("express");
const path = require("path");
const app = express();

// Serve the Vite build from Firebase Hosting
app.use(express.static(path.join(__dirname, "../lockedin/dist")));

// Example API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Catch-all route to serve the Vite frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../lockedin/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// api works