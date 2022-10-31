const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "410908f305bfbcc57a2338f768e6084f",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
