const express = require("express");
const app = express();

// Serve static files (including your DOCX file)
app.use(express.static("public"));

// Start the server on port 8181
const port = 8181;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
