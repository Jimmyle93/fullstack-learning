let paginationSelect = document.querySelector(
  '[data-component="pagination:select"]'
);
let paginationPrev = document.querySelector(
  '[data-component="pagination:previous"]'
);
let paginationNext = document.querySelector(
  '[data-component="pagination:next"]'
);
let buildPagination = function (pagination) {
  //the purpose of this function is to build all the options for the select element
  //create a variable to hold our new HTML content
  let content = '';
  //1st,we loop throught the number of page we want to put inside the select
  for (let i = 1; i <= pagination.items.count; i++) {
    console.log(i);
    newContent = newContent + `<option>${i}</option>`;
  }
};
//2nd now we know the number we want to put inside the select
//we will create a new option to put in the select

//deeper guidance
//we want a string newContent to contain a series of <option>${i}</option>

// fetch the data from https://api.jikan.moe/v4/top/anime
fetch('https://api.jikan.moe/v4/top/anime')
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);

    // Figure out the kind of data we will use to render the list later
    // in this case it's result.data
    const data = result.data;
    const pagination = result.pagination;

    // Use the information from data to render the list view
    // So we need to select the list view in order to add more children to it
    let listView = document.querySelector('[data-component="list"]');

    // create newContent that will hold all new content
    let newContent = '';

    // Use the result.data we just load above to create the UI for listView
    // result.data is an array so we need to loop through the array
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      // put some dummy content into the list view each time we loop
      // so we can add the information we need later

      console.log(`item at index ${i}`, item);

      newContent =
        newContent +
        `
       <div class="col-6 col-md-3 mb-5 text-center" title="${item.title_english}">
         <a href="details.html?id=${item.mal_id}" class="link-primary d-block position-relative text-decoration-none" data-component="item">
           <span class="position-absolute badge bg-danger top-0 end-0">
               <i class="bi bi-star-fill"></i> ${item.score}
           </span>
           <span class="d-flex flex-column justify-content-center">
               <img class="rounded shadow" src="${item.images.jpg.large_image_url}" data-component="image" />
               <span class="text-dark mt-2" data-component="title">${item.title_english}</span>
           </span>
         </a>
       </div>`;
    }

    listView.innerHTML = newContent;
  });
