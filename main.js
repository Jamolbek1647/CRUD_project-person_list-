class Person {
    constructor(firstname, lastname, age, address) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.address = address
    }
}

class Address {
    constructor(region, district, street, apartment) {
        this.region = region
        this.district = district
        this.street = street
        this.apartment = apartment
    }
}
let persons = []
for (let index = 0; index < 25; index++) {
    const age = Math.random() * 60 + 20
    const _age = Math.floor(age)
    // console.log(_age);
    persons.push(new Person(`Ikromov-${index}`, `Kamolbek-${index}`, _age, new Address('Buxoro', 'Buxoro shahar', 'X.A.Gijduvoniy', 13)))
}
// console.log(persons);
const person_filter = persons.filter(a => a.age < 40)
// console.log(person_filter);

// localStorage.setItem('persons', JSON.stringify(persons))

const get_from_local = localStorage.getItem('persons')
console.log(get_from_local);

if (get_from_local != null){
    console.log('JSON PARSE');
    const json = JSON.parse(get_from_local)
    persons = [...json]
    console.log(persons);
}