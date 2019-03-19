import Character from '../src/js/character';

test('Bowman', () => {
  const received = new Character('Лучник', 'Bowman');
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    helth: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Swordsman', () => {
  const received = new Character('Мечник', 'Swordsman');
  const expected = {
    name: 'Мечник',
    type: 'Swordsman',
    helth: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Magician', () => {
  const received = new Character('Маг', 'Magician');
  const expected = {
    name: 'Маг',
    type: 'Magician',
    helth: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Undead', () => {
  const received = new Character('Нежить', 'Undead');
  const expected = {
    name: 'Нежить',
    type: 'Undead',
    helth: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Zombie', () => {
  const received = new Character('Зомби', 'Zombie');
  const expected = {
    name: 'Зомби',
    type: 'Zombie',
    helth: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Daemon', () => {
  const received = new Character('Демон', 'Daemon');
  const expected = {
    name: 'Демон',
    type: 'Daemon',
    helth: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Name must be more than 2 letters', () => {
  const received = () => new Character('Д', 'Daemon');

  expect(received).toThrow();
});

test('Name must be less than 10 letters.', () => {
  const received = () => new Character('Демонический', 'Daemon');

  expect(received).toThrow();
});

test('Unknown type', () => {
  const received = () => new Character('Демон', 'Maester');

  expect(received).toThrow();
});

test('Unknown type', () => {
  const received = () => new Character();

  expect(received).toThrow();
});

test('Name must be a string', () => {
  const received = () => new Character(1234, 'Undead');

  expect(received).toThrow();
});
