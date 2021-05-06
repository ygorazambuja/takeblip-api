import express from "express";
import axios from "axios";
import { RootObject } from "./interfaces/RootObject";

const app = express();

app.get("/github", async (_, res) => {
  const { data } = await axios.get<RootObject[]>(
    "https://api.github.com/users/takenet/repos?sort=created&direction=asc"
  );

  const getOnlyCSharp = data.filter((repo) => repo.language === "C#");

  const array = [];
  for (let i = 0; i < 5; i++) {
    array.push(getOnlyCSharp[i]);
  }

  res.json(array);
});

app.listen(process.env.PORT || 3000);
