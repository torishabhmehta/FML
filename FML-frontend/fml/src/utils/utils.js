export function truncateText (text, max_length) {
  if (text.length > max_length) {
    text = text.substring(0, max_length) + '...'
  }
  return text
}

export function processText (text, max_length) {
  text = text.replace('&#39;', "'")

  return truncateText(text, max_length)
}
