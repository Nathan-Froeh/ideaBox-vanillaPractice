
let storage = JSON.parse(localStorage.getItem('idea')) || [];
var title = document.querySelector('.title--input');
let body = document.querySelector('.body--input');
let submit = document.querySelector('.submit');
let ideas = [];


submit.addEventListener('click', newIdea)

function instantiate(idea) {
  return new Idea(idea.title, idea.body, idea.id, idea.quality, idea.star)
}

function newIdea(e) {
  e.preventDefault()
  let idea = {
    title: title.value,
    body: body.value,
    id: Date.now(),
    quality: 'Ledgendary',
    star: false
  }
  storage.push(idea)
  instantiate(idea).addIdea(idea)
}