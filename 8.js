let coordinates = new Map([
    ["1k", "1v"],
    ["2k", "2v"],
    ["3k", "3v"],
    ["4k", "5v"],
    ["5k", "5v"]
]);

for (let name of coordinates.keys() ) {
    let val = coordinates.get(name);
    console.log('«Ключ — '+name+', значение — '+val+'»');
}