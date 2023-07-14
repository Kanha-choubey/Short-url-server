const express = require("express");

const { connectDB } = require("./config/db");
const router = require("./routes/urlRouter");
const URL = require("./models/url");
const app = express();
const PORT = 5000;
connectDB(
  "mongodb+srv://kanhaarmyoo7:kanha@kanha.cki9rtx.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("database connected"));
app.use(express.json());

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});
app.use("/url", router);
app.listen(PORT, () => console.log(`server is runing on ${PORT}`));
