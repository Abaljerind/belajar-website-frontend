import axios from "axios";

export const getMovieList = async () => {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/movie/popular`
  );
  console.log({ movieList: movie });
  return;
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
};
