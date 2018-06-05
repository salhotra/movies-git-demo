const superheroes = [
  'Batman',
  'Captain America',
  'Ironman',
  'Deadpools',
  'Thor',
  'Hanuman',
];

function getFavoriteSuperhero(person) {
  switch (person) {
    case 'Nishant':
      return superheroes[0];
    case 'Arfat':
      return superheroes[2];
    case 'Anshuman':
      return superheroes[5];
  }
}
