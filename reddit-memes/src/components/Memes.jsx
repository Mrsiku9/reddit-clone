import React, { useEffect, useState } from "react";
import { getImage } from "../services/api.js";
import { Grid } from "@mui/material";
import Meme from "./Meme.jsx";

const Memes = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getImage();
      setMemes(response.data.children);
    };
    getData();
  }, []);
  console.log(memes);
  return (
    <Grid container margin={3}>
      {memes.map((meme) => (
        <Grid item xs={2}>
          <Meme meme={meme} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Memes;
