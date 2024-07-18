//Create a class named QuizSelection
class QuizSelection {
  #container;
  //add a new private #select
  #select;

  constructor(container) {
    this.#container = container;
    //call #render in the constructor after create a private render
    this.#render();
  }
  //create private render that we can add a dummy <selcet>
  #render() {
    this.#container.innerHTML = `
    <select class ="form-select d-inline-block w-auto mb-5">
    <option>-- Select a quiz --</option>
           <option value="javascript-quiz">Javascript Quiz</option>
           <option value="au-history-quiz">Australian History Quiz</option>
           <option value="electric-car-quiz">Electric Cars Quiz</option>

    </select>`;
  }
  //Create a private #setup method to #1 #2
  #setup() {
    //#1 "select" element and save to #select
    this.#select = this.#container.querySelector('select');

    //#2 attach event "change" to #select varible
    this.#select = addEventListener('change', this.#onSelectChange.bind(this));
  }

  #onSelectChange() {}
}
//export default the class
export default QuizSelection;
