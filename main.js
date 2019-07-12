
let storage = JSON.parse(localStorage.getItem('idea')) || [];
var title = document.querySelector('.title--input');
let body = document.querySelector('.body--input');
let submit = document.querySelector('.submit');
let ideas = [];
let storageBox = document.querySelector('.storageBox')

submit.addEventListener('click', newIdea);
window.addEventListener('load', retrieveIdea);

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
  genCard(idea)
}

function retrieveIdea() {
  storage.map(idea => genCard(idea))
}

function genCard(idea) {
	var ideaCard = `
		<article class = 'idea-card' id='${idea.id}'>
      <div class = 'idea-card-top'>
        <input type = 'image' src ='4.svg' class = 'star image' alt = 'star-button'>
        <input type = 'image' src = '1.svg' class = 'delete image' id='${idea.id}'>
      </div>
      <article>
        <h4 class = 'idea-card-title' contenteditable = 'true'>${idea.title}</h4>
        <p class = 'idea-card-text' contenteditable = 'true'>${idea.body}</p>
      </article>
      <div class = 'idea-card-bottom'>
        <input type = 'image' src = '2.svg' class = 'upvote-deact image'>
        <p class = 'quality'>Quality:</p>
        <input type = 'image' src = '3.svg' class = 'downvote-deact image'>
      </div>
    </article>
          `
  storageBox.insertAdjacentHTML('afterBegin', ideaCard);
};