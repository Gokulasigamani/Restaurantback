const mongoose = require("mongoose");
const express = require("express");
const  route  = require("./Route");
const cors=require("cors")
const app = express();
app.use(express.json())
app.use(cors())
mongoose
  .connect(
    "mongodb+srv://gokul:gokul2004@cluster1.wmlbbkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() =>
    app.listen(4000, () => {
      console.log("listening...");
    })
  )
  .catch((rr) => console.error(rr));

  app.use("/",route);
