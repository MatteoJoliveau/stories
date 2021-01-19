import '@fortawesome/fontawesome-free/css/all.css'
import '../styles/main.scss'
import { attachNavbarButton } from './navbar'
import { attachSearchBar } from './search'

document.addEventListener('DOMContentLoaded', () => {
  attachNavbarButton(document)
  attachSearchBar(document, window)
})
