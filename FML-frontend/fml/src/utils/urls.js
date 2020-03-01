export function urlSearchAPI (message, API_key, maxRes) {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${message}&type=video&videoDefinition=high&key=${API_key}&maxResults=${maxRes}`
}

export function urlImage (id) {
  return `https://img.youtube.com/vi/${id}/default.jpg`
}

export function urlVideo (id) {
  return `https://www.youtube.com/watch?v=${id}&autoplay=0`
}
