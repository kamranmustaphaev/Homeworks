const form = document.querySelector('.form-add')
const container = document.querySelector('.user-container')
let usersArray = []
form.addEventListener('submit', function(event){
    event.preventDefault()
    const {link, fullname} = event.target
    usersArray.push({
        id: Date.now(),
        link: link.value,
        fullname: fullname.value
    }) 
    
    rerender()
    event.target.reset()
})  
function createUser(id, link, fullname){
    const cardElem = document.createElement('div')
    const imageElem = document.createElement('div')
    const nameElem = document.createElement('p')
    imageElem.style.backgroundImage = `url(${link})`
    imageElem.classList.add('image')
    nameElem.innerText = fullname

    cardElem.append(imageElem, nameElem)
    cardElem.addEventListener('dblclick', function(){
       usersArray = usersArray.filter(function(el){
        return el.id !== id
       })
        rerender()
    })
    return cardElem
}   
    function rerender(){
        container.innerText = ''
        usersArray.forEach(function({id, link, fullname}){
            const newUser = createUser(id, link, fullname)
            container.append(newUser)
          
        })
    }
rerender()