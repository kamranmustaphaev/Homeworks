// Напишите цикл for, который выводит числа в консоль от 10 до 0.
for(let i = 10;i > -1; i--){ 
    console.log(i)
  }
 

// В программе заданы две переменные n и m с числовым значением каждая.
// Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n. 
for(let i = m;i <= n; i++){
    if(i % 2 == 0){
      console.log(i)
    }
   }
   

// Напишите функцию, range, которая принимает два аргумента (n и m)
// с числовым значением и возвращает массив с числами от меньшего до большего -1.
function range(n, m) {
  const numbers = [];
  if(n < m)
  for (let i = n; i < m; i++) {
    numbers.push(i);
  }
  else 
  for (let i = m; i < n; i++) {
    numbers.push(i);
  }
  return numbers
}
console.log(range(8, 15))
console.log(range(10, 2));


  // Создайте функцию handler, которая принимает два аргумента, массив и число.
  // Функция должна сформировать новый массив на основе заданного и исключить из него указанное число.
  // Для решения задачи используйте метод массива filter.
  function handler(array, num){
    return array.filter(function(el){
      return el !== num
   })
    }
    console.log(handler([12, 34, 4, 4, 5], 4));
    
  // Создайте функцию handler, которая принимает в качестве аргумента массив с положительными и отрицательнцми числами,
  // формирует новый массив, в котором все отрицательные значения преобразованы в положительные и возращает новый массив.
  // Для решения задачи используйте метод массива map.
  function handler(array){
    return array.map(function(el){
      if(el < 0){
        return el= el* -1
      }
      else {
        return el
      }
    })
  }
  console.log(handler([12, -1, 23, -5]));

  // Создайте функцию handler, которая принимает в качестве аргумента массив с положительными числами,
  // формирует новый массив после дедупликации (удалены все повторяющиеся числа).
  // Для решения задачи используйте метод массива filter.
  function handler(array){
   const result = array.filter(function(el, idx, arr){
   return arr.indexOf(el) === idx
  })
  return result
}
  console.log(handler([1, 1, 1, 1, 1, 1, 1]));

  // Создайте функцию handler, которая принимает в качестве аргумента массив со строками и возвращает новый массив из длинн этих строк. 
  // Для решения задачи используйте метод массива map.
  function handler(array){
    return array.map(function(el){
      return el.length
    })
  }
  console.log(handler(["Hello World", "Hey"]));

  // Создайте функцию handler, которая принимает в качестве аргументов массив с числами и строками и число.
  // Функция должна в первую очередь отфильтровать массив и оставить только числа. 
  // На основе полученного после фильтрации массива необходимо сформировать массив,
  //  в котором все числа возведены в степен числа, полученного в качестве второго аргумента функции handler.
  // Для решения задачи используйте методы массива filter и map.
  function handler(array, num){
   const new_array = array.filter(function(el){
      return el === +el
    })
  const arr = new_array.map(function(el){
    return Math.pow(el, num)
   })
    return arr
  }
  console.log(handler([100, 'CTO'], 3));