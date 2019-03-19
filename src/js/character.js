function Character(name, type) {
  this.name = name;
  this.type = type;
  this.helth = 100;
  this.level = 1;

  const characterType = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

  if (!characterType.includes(this.type)) throw new Error('Unknown type');

  if (typeof this.name !== 'string') throw new Error('Name must be a string');

  if (this.name.length < 2) throw new Error('Name must be more than 2 letters');

  if (this.name.length > 10) throw new Error('Name must be less than 10 letters');

  if (this.type === 'Bowman') {
    this.attack = 25;
    this.defence = 25;
  } else if (this.type === 'Swordsman') {
    this.attack = 40;
    this.defence = 10;
  } else if (this.type === 'Magician') {
    this.attack = 10;
    this.defence = 40;
  } else if (this.type === 'Undead') {
    this.attack = 25;
    this.defence = 25;
  } else if (this.type === 'Zombie') {
    this.attack = 40;
    this.defence = 10;
  } else if (this.type === 'Daemon') {
    this.attack = 10;
    this.defence = 40;
  }
}

export default Character;
