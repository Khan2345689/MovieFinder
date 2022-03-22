import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

function Search(props) {
  const [MovieName, setMovieName] = useState("");

  return (
    <>
      <div className="Search">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={MovieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <div className="button">
          <Button
            variant="contained"
            onClick={() => props.handlesearch(MovieName)}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
}

export default Search;
