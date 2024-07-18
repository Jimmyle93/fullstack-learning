import QuizSelection from './components/quizSelection.js';
//Create a class name QuizApp
class QuizApp {
  //make this class receive an argument "container"
  #container;
  #quizSelection;
  //save to private variable
  constructor(container) {
    this.#container = container;
    //call #render inside the constructor
    this.#render();
    this.#setup();
  }
  //add a private method named "render"
  #render() {
    // add some HTML elements to #container
    this.#container.innerHTML = `
    <div class="container mt-5 text-center">
        <div data-component="selection"></div>
        <div data-component="content"></div>
        <div data-component="timer"></div>
        <div data-component="navigation"></div>
        <div data-component="report"></div>
    </div>`;
  }
  //create a private function #setup the call it inside contructor
  #setup() {
    // let’s initialize an instance for our class QuizSelection and pass the DOM “data-component=”selection” to #setup
    let container = this.#container;

    this.#quizSelection = new QuizSelection(
      container.querySelector('[data-component="selection"]')
    );
  }
}
//Create an instance for QuizApp class
//save the create instance to variable named app
const app = new QuizApp(document.querySelector('#app'));
