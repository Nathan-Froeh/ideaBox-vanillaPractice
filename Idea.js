class Idea {
  constructor(title, body, id, quality, star) {
      this.title = title;
      this.body = body;
      this.id = id;
      this.quality = quality;
      this.star = star;
  }

  addIdea() {
    localStorage.setItem('idea', JSON.stringify(storage))
    console.log(JSON.parse(localStorage.getItem("idea")))
  }

  saveToStorage() {

  }

  removeIdea() {

  }



}