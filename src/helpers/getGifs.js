export const getGifs = async (category) => {

  // Default data
  const limit = 10;
  const API_KEY = 'NP56WNO9H7XY1tkkJ7VtS93RUI7Ln0G8';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&q=${ category }&limit=${ limit }`;

  const response = await fetch(url); // Get raw response
  const { data } = await response.json(); // Destructuring JSON response into data object
  const gifs = data.map(gif => (
    {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }
  ));

  return gifs;
}