import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller",
      image: "https://image.tmdb.org/t/p/w500//qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Exploring space and time",
      image: "https://image.tmdb.org/t/p/w500//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
  ],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // Add actions if needed
  },
});

export default movieSlice.reducer;
