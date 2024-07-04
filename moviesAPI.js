import axios from "axios";

// const apiKey = "c8a79d8015e2ffb308a28f003f5298f8";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGE3OWQ4MDE1ZTJmZmIzMDhhMjhmMDAzZjUyOThmOCIsIm5iZiI6MTcxOTg5MTU4OS42NzI5MTMsInN1YiI6IjY2ODM1M2VmYWZkYWRmZjBjZTliMTg1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RyrhWQLc5CxZf3eCpyYv0hfRFR4wxh1Ffgt7fCjF4-k",
  },
};

export async function searchMovies(query) {
  const baseURL = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1`;

  return axios.get(baseURL, options);
}

export async function getTrendingMovies() {
  const baseURL =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  //     fetch(
  //   "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  return axios.get(baseURL, options);
}

export async function getSingleMovie(movieId) {
  const baseURL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  return axios.get(baseURL, options);
}

export async function getCast(movieId) {
  const baseURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;

  return axios.get(baseURL, options);
}

export async function getReviews(movieId) {
  const baseURL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;

  return axios.get(baseURL, options);
}
