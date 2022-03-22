import { Grid } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  console.log(props.Moviedata);
  return (
    <>
      <h1>MovieList</h1>
      <div className="MovieList">
        <Grid container>
          {props.Moviedata.map((movie) => (
            <Grid item xs={4}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default MovieList;
