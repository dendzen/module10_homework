data = prompt('Please enter data');

let numberData= +data;

typeData = typeof(numberData);

if (typeData == 'number' && !numberData)
    alert("Упс, кажется, вы ошиблись");
else if (numberData % 2 == 0)
    alert("Четное");
else
    alert("Не четное");