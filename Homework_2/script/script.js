const tutors = [
    {
      id: 1,
      fullname: 'Дмитрий Иванов',
      position: 'Специалист по вилкам',
      photo: '/Users/avgustrush/Desktop/tel-ran/Homeworks/Homework_2/media/foto.png'
    },
    {
      id: 2,
      fullname: 'Дмитрий Иванов',
      position: 'Специалист по вилкам',
      photo: '/Users/avgustrush/Desktop/tel-ran/Homeworks/Homework_2/media/foto2.png'
    },
    {
      id: 3,
      fullname: 'Дмитрий Иванов',
      position: 'Директор',
      photo: '/Users/avgustrush/Desktop/tel-ran/Homeworks/Homework_2/media/foto.png'
    }
  ]
  const container = document.querySelector('.container')
  tutors.forEach(function(el){
    const cardElem = document.createElement('div')
    const avatarElem = document.createElement('div')
    const nameElem = document.createElement('p')
    const positionElem = document.createElement('p')
    const btnElem = document.createElement('button')

    nameElem.innerText = el.fullname
    nameElem.classList.add('fullname')
    btnElem.innerText = 'Биография'
    positionElem.innerText = el.position
    positionElem.classList.add('position')
    avatarElem.style.backgroundImage = `url(${el.photo})`
    // if(el.position === 'Директор'){
    //     avatarElem.style.backgroundColor = 'green'
    // }

    // cardElem.style.backgroundColor = position === 'Manager' ? 'lightgreen' : 'lightpink';

    
    cardElem.append(avatarElem, nameElem, positionElem, btnElem)
    container.append(cardElem)
})
  // Если человек входит в управляющее звено, сделать ему цвет заднего фона зеленый, а если нет - то светло-розовый