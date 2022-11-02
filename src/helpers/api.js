import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '997ea85e86de02db6a9182bda8c38aca',
  },
});

export const fetchTrendingFilms = async () => {
  const response = await api.get('/trending/movie/week')
  return response.data.results;
};

export const fetchFilmDetails = async (movie_id) => {
  const response = await api.get(`/movie/${movie_id}`)
  return response.data;
};

export const fetcActors = async (movie_id) => {
  const response = await api.get(`/movie/${movie_id}/credits`)
  return response.data.cast;
};

export const fetchReviews = async (movie_id) => {
  const response = await api.get(`/movie/${movie_id}/reviews`)
  return response.data.results;
};

export const fetchFindFilms = async (query, page) => {
  const response = await api.get(`/search/movie`, {
    params: {
      query,
      page,
    }
  })
  console.log(response.data);
  return response.data;
};
