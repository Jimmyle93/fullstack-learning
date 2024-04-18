let sidebarButton = document.querySelector('.sidebar-toggle-button');
let sidebar = document.querySelector('.sidebar');
let onSideBarButtonClick = function () {
  // when the button is clicked,
  // if sidebase has the class collapsed
  if (sidebar.classList.contains('collapsed')) {
    // remove it
    sidebar.classList.remove('collapsed');
  } else {
    // otherwise, add class collapsed to .sidebar
    sidebar.classList.add('collapsed');
  }
};
sidebarButton.addEventListener('click', onSideBarButtonClick);
let tabTriggerButtons = document.querySelectorAll('.tabs-trigger');

let onTabTriggerButtonClicked = function (event) {
  let currentButton = event.target;

  currentButton.classList.add('active');
};

for (let i = 0; i < tabTriggerButtons.length; i++) {
  let button = tabTriggerButtons[i];

  button.addEventListener('click', onTabTriggerButtonClicked);
}
const onTabTriggerButtonClicked = function (event) {
  const currentButton = event.target;

  for (let i = 0; i < tabTriggerButtons.length; i++) {
    const button = tabTriggerButtons[i];

    button.classList.remove('active');
  }

  currentButton.classList.add('active');
};
