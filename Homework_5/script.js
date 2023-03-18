const container = document.querySelector('.container')
fetch('https://reqres.in/api/users?page=2')
.then(function(res){return res.json()})
.then(function(json){createCard(json.data)})
function createCard(cards){
cards.forEach(function({email, first_name, last_name, avatar}){
    const card = document.createElement('div')
    const cardEmail = document.createElement('a')
    const cardFname = document.createElement('p')
    const cardLname = document.createElement('p')
    const cardAvatar = document.createElement('img')
    card.classList.add('card')
    cardEmail.innerText = email
    cardEmail.href = `mailto:${email}`
    cardFname.innerText = first_name
    cardLname.innerText = last_name
    cardAvatar.src = avatar
    card.append(cardEmail, cardFname, cardLname, cardAvatar)
    container.append(card)
})
}