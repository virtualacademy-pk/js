class Person {
    constructor(id,firstName, lastName, gender) {

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
}

const PersonModule =  function() {
    let persons = [];
    let counter = 0;
    return {
        add: (person) => {
            persons[counter] = person;
            counter++;
        },
        print: () => {
            persons.forEach(v => {
                console.log(v)
            });
        },
        size: () => {
            return counter;
        },
        find: (id) => {
            return persons.filter(f => f.id === id);
        }
    }
}();

 export {PersonModule, Person}