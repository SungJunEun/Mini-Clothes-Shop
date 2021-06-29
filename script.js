function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
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
loadItems()
  .then(items => {
    displayItems(items);
  })
  .catch(console.log);