import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import qr from "qr-image";

const app = express();

app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/generate", (req, res) => {
  const url = req.body.url;
  if (!url) {
    return res.status(400).send("URL is required");
  }
  const qr_svg = qr.image(url, { type: "png" });
  res.setHeader("Content-Type", "image/png");
  qr_svg.pipe(res);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

