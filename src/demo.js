let us = {
    name: "Serega",
    age: 20,
}

function changeAge(element) {
    element['age'] = 25
}

changeAge(us)
console.log(us)