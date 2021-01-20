import '@fortawesome/fontawesome-free/css/all.css'
import '../styles/main.scss'
import { attachNavbarButton } from './navbar'

document.addEventListener('DOMContentLoaded', () => {
  attachNavbarButton(document)
  if (window.elasticlunr && window.searchIndex) {
    import('./search')
      .then(({ attachSearchBar }) => attachSearchBar(document, window.elasticlunr, window.searchIndex))
      .catch(console.error)
  }
})
