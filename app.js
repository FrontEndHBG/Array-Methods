var shoppingList = [];
var form = document.getElementById('shopping-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var input = document.getElementById('input-form').value;
    shoppingList.push(input);
    document.getElementById('list').innerHTML = shoppingList;
});


