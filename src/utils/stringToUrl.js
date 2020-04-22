export default function stringToURL(string) {
  return string.replace(/ /g,"-").toLowerCase()
}