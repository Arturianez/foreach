const names = ['John', 'Jane', 'Michael', 'Emily'];

const result = names.map(function(item){ // создали новый массив, всё измененно вернули
    return `${item} Smith`

})

const newResult = result.filter(function (item) { // из нового массива достали имена больше 12 букв, 
    // вернули только изменения
    return item.length >= 12;
  });
console.log(newResult);

function fn(arr) {
    return arr
    .map(function(item) {
        return `${item} Ivanov`
    })
    .filter(function(item) {
        return item.length >= 12
    })
}

console.log(fn(names))