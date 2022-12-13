const TITLE = 'TITLE'
const ICON_URL = ''

window.__env = {
  ICON_URL,
  TITLE,
}
document.title = TITLE
document.querySelector('link[rel="icon"]').setAttribute('href', ICON_URL)
