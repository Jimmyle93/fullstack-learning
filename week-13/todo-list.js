let itemContent = `
    <input class="form-control border-0" data-component="input" readonly />
    <button class="btn btn-danger" data-component="delete">X</button>
    <button class="btn btn-primary" data-component="edit">Edit</button>
    <button class="btn btn-primary d-none" data-component="confirm">Confirm</button>
`;
let input = document.querySelector('[data-component="input"]');
let list = document.querySelector('[data-component="list"]');
let addButton = document.querySelector('[data-component="add"]');
let onDeleteButtonClick = function (event) {
  let currentDeleteButton = event.target;
  let listItemParent = currentDeleteButton.closest(
    '[data-component="list-item"]'
  );
  listItemParent.remove();
};
let onEditButtonClick = function (event) {
  let currentEditButton = event.target;
  let listItemParent = currentEditButton.closest(
    '[data-component="list-item"]'
  );
  let itemInput = listItemParent.querySelector('[data-component="input"]');
  let confirmButton = listItemParent.querySelector(
    '[data-component="confirm"]'
  );

  itemInput.readOnly = false;

  currentEditButton.classList.add('d-none');
  confirmButton.classList.remove('d-none');
};
let onConfirmButtonClick = function (event) {
  let confirmButton = event.target;
  let listItemParent = confirmButton.closest('[data-component="list-item"]');
  let itemInput = listItemParent.querySelector('[data-component="input"]');
  let editButton = listItemParent.querySelector('[data-component="edit"]');

  itemInput.readOnly = true;

  editButton.classList.remove('d-none');
  confirmButton.classList.add('d-none');
};
let onAddButtonClick = function () {
  let newTodoContent = input.value;
  let newTodoItem = document.createElement('DIV');

  newTodoItem.classList.add('list-group-item', 'd-flex');
  newTodoItem.setAttribute('data-component', 'list-item');
  newTodoItem.innerHTML = itemContent;

  list.appendChild(newTodoItem);

  let allTodoItems = list.querySelectorAll('[data-component="list-item"]');
  let lastIndex = allTodoItems.length - 1;
  let latestTodoItem = allTodoItems[lastIndex];
  let latestTodoInput = latestTodoItem.querySelector(
    '[data-component="input"]'
  );

  latestTodoInput.value = newTodoContent;

  let deleteButton = latestTodoItem.querySelector('[data-component="delete"]');

  deleteButton.addEventListener('click', onDeleteButtonClick);

  let editButton = latestTodoItem.querySelector('[data-component="edit"]');
  editButton.addEventListener('click', onEditButtonClick);

  let confirmButton = latestTodoItem.querySelector(
    '[data-component="confirm"]'
  );
  confirmButton.addEventListener('click', onConfirmButtonClick);
};

addButton.addEventListener('click', onAddButtonClick);
