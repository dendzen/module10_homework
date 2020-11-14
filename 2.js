let x;
result = typeof(x);

switch (result) {
    case 'number':
        console.log('X — число');
        break;
    case 'string':
        console.log('X — строка');
        break;
    case "boolean":
        console.log('X — Boolean');
        break;
    default:
        console.log('«Тип x не определён»');
}