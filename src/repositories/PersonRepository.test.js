import PersonRepository from './PersonRepository';

it('Passes', () => {
  expect(true).toBeTruthy();
});

it('Adds one person to the repository', () => {
  const persons = new PersonRepository([]);
  const person = {
    id: 1,
    name: 'name',
    nationality: 'eua',
  };

  persons.add(person);

  expect(persons.persons.length).toBe(1);
  expect(persons.persons[0]).toBe(person);
});

it('Removes one person from the repository', () => {
  const person = {
    id: 1,
    name: 'name',
    nationality: 'eua',
  };
  const persons = new PersonRepository([person]);

  persons.remove(person.id);

  expect(persons.persons.length).toBe(0);
});

it('Gets one person from the repository', () => {
  const person = {
    id: 1,
    name: 'name',
    nationality: 'eua',
  };

  const persons = new PersonRepository([person]);

  const storedPerson = persons.find(person.id);

  expect(person).toBe(storedPerson);
});
