import PersonRepository from './PersonRepository';

it('Passes', () => {
    expect(true).toBeTruthy();
});

it('Adds one person to the repository', () => {
    let persons = new PersonRepository([]);
    let person = {
        id: 1,
        name: 'name',
        nationality: 'eua'
    };

    persons.add(person);

    expect(persons.persons.length).toBe(1);
    expect(persons.persons[0]).toBe(person);
});

it('Removes one person from the repository', () => {
    let person = {
        id: 1,
        name: 'name',
        nationality: 'eua'
    };
    let persons = new PersonRepository([person]);

    persons.remove(person.id);

    expect(persons.persons.length).toBe(0);
});

it('Gets one person from the repository', () => {
    let person = {
        id: 1,
        name: 'name',
        nationality: 'eua'
    };

    let persons = new PersonRepository([person]);

    let storedPerson = persons.find(person.id);

    expect(person).toBe(storedPerson);
});