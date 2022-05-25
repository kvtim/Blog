export function renderPost(post, options = {}) {
    const tag = post.type === 'news'
        ? '<li class="tag tag-blue tag-rounded">News</li>'
        : '<li class="tag tag-orange tag-rounded">Note</li>'

    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const candidate = favorites.find(p => p.id === post.id)

    const button = candidate
      ? `<button class="button button-action button-delete"
      data-id="${post.id}" data-title="${post.title}">Delete</button>`
      : `<button class="button button-action button-save"
      data-id="${post.id}" data-title="${post.title}">Save</button>`

    return `  
    <article class="panel">
     <div class="panel-head">
       <h2>${post.title}</h2>
       <ul class="tags">
        ${tag}
       </ul>
     </div>
     <div class="panel-body">
       <p>${post.fulltext}</p>
     </div>
     <div class="panel-footer">
       <small>${post.date}</small>
       ${options.withButton ? button : ''}
     </div>
   </article>
    `
}