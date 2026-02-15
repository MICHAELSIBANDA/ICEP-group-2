require("dotenv").config();
const app = require("./src/app");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`CampusConnect backend running on port ${PORT}`);
});

app.use(cors({
  origin: "https://icep-group-2-campusconnect.onrender.com",
  credentials: true
}));
