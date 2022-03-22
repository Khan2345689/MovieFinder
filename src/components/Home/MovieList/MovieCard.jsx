import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function MovieCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.movie.Poster}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Year: {props.movie.Year}</p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
