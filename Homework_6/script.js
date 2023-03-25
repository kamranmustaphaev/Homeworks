const container = document.querySelector('.container')

fetch('https://jsonplaceholder.typicode.com/todos')
.then(function(res){return res.json()})
.then(function(json){createCard(json)})

let array = []

function createCard(array){
  array.forEach(function({title,completed}) {
    const item = document.createElement('div')
    item.classList.add('item')
    item.innerText = title
    item.style.background = completed === false ? 'green' : 'red'
    container.append(item)
  });
}