function debounce (func, wait) {
  let timeout

  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeout)

    timeout = setTimeout(function () {
      timeout = null
      func.apply(context, args)
    }, wait)
  }
}

export class Searcher {
  constructor (index) {
    this.index = index
    this.maxItems = 10
    this.options = {
      bool: 'AND',
      fields: {
        title: { boost: 2 },
        body: { boost: 1 }
      }
    }
  }

  search (term) {
    if (!term || term === this.currentTerm) {
      return null
    }

    const results = this.index.search(term, this.options)
    if (results.length === 0) {
      return []
    }

    this.currentTerm = term
    return results.slice(0, this.maxItems)
  }
}

export function attachSearchBar (document, elastic, searchIndex) {
  const searchContainer = document.getElementById('search-container')
  const bar = document.getElementById('search')
  const resultsContainer = document.getElementById('search-results')
  const index = elastic.Index.load(searchIndex)
  const searcher = new Searcher(index)

  bar.addEventListener('keyup', debounce(() => {
    const results = searcher.search(bar.value.trim())
    if (results === null) return
    console.log('Results', results.length)
    if (results.length === 0) {
      searchContainer.classList.remove('is-active')
      return
    }

    searchContainer.classList.add('is-active')
    console.dir(results)
    console.dir(resultsContainer.children)

    const items = results.map((result) => {
      const item = document.createElement('a')
      item.href = result.ref
      item.innerText = result.doc.title
      item.classList.add('dropdown-item')
      return item
    })
    resultsContainer.replaceChildren(...items)
  }, 50))
}
