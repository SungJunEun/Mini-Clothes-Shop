function loadItems() {
  return fetch('data/data.json') // fetch returns response
    .then(response => response.json())  // .json returns promise which resolves with js object that is result of parsing the body text as JSON
    .then(data => data.items);
}
function displayItems(items) {
  const container = document.querySelector("ul");
  container.innerHTML = items.map(item => createHTMLstring(item)).join("");
}
function createHTMLstring(item) {
  return ` 
  <li class="product">
  <img src="${item.img}" alt="${item.type}">
  <span>${item.gender} ${item.size} size</span>
  </li>`; // return 옆에서 바로 시작해야 알아먹음
}

function setEventlistners(items) {
  const logo = document.querySelector('.logo');
  const menu = document.querySelector('nav');
  logo.addEventListener('click', logodisplay);
  menu.addEventListener('click', menudisplay);
  function logodisplay() {
    displayItems(items);
  }
  function menudisplay(e) {
    onButtonClick(e, items);
  }
}
function onButtonClick(event, items) {
  const key = event.target.dataset.key;  //using data attribute
  const value = event.target.dataset.value;
  if(key == null || value == null) {
    return;
  }
  const filtereditems = items.filter(item => item[key]== value);
  displayItems(filtereditems);
}
loadItems()
  .then(items => {
    displayItems(items);
    setEventlistners(items);
  })
  .catch(console.log);