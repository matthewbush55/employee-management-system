// import required libraries
const express = require("express");

// boilerplate for middleware handling
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// might need to include routes here

// start express listening port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
