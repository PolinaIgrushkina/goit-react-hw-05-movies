import incognito from '../images/incognito.jpeg'

export function createImg(path) {
  if (path) {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
  return incognito;
}