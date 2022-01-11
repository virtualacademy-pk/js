class Person {
    constructor(id, firstName, lastName, gender) {

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
}

// let persons = [];
// let counter = 0;
const PersonModule = {
    persons: [],
    counter: 0,
    add: (person) => {
        PersonModule.persons[PersonModule.counter] = person;
        PersonModule.counter++;
    },
    print: () => {
        PersonModule.persons.forEach(v => {
            console.log(v)
        });
    },
    size: () => {
        return PersonModule.counter;
    },
    find: (id) => {
        return PersonModule.persons.filter(f => f.id === id);
    }
};

export {PersonModule, Person}