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
function addItem() {
    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let age = document.getElementById('age')
    let region = document.getElementById('region')
    let district = document.getElementById('district')
    let street = document.getElementById('street')
    let apartment = document.getElementById('apartment')
    persons.push(new Person(firstname, lastname, age, new Address(region, district, street, apartment)))
    return persons
}

function print(){
    let response = document.getElementById('print')
    return response.value = JSON.stringify(persons[0])
}

function SynctoLocalStorage(){
    localStorage.setItem('persons', JSON.stringify(persons))
}

function SyncfromLocalStorage(){
    const get_from_local = localStorage.getItem('persons')
}
//consoleda qilish kerak