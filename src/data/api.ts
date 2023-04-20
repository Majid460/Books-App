export const getMovies = async () => {
  try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const responseToJson: moviesResponse = await response.json();
    return responseToJson;
  } catch (e) {
    console.log(e);
  }
};
export interface moviesResponse {
  description: string;
  movies: Array<moviesSubResponse>;
  title: string;
}
export interface moviesSubResponse {
  id: string;
  releaseYear: string;
  title: string;
}
