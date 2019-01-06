const shoppingList = [];
const form = document.querySelector('#shopping-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.querySelector('#input-form').value;
    shoppingList.push(input);
    document.querySelector('#list').innerHTML = shoppingList;
});


