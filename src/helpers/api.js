import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '997ea85e86de02db6a9182bda8c38aca',
  },
});

export const fetchTrendingFilms = async () => {
  const response = await api.get('/trending/movie/week')
  console.log(response.data.results);
  return response.data.results;
};




