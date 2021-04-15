let starHollows = ['Lorelai', 'Rory', 'Luke', 'Lane', 'Kirk', 'Taylor'];

let removed = starHollows.splice(1);

console.log(removed);



let beverlyHillsGang = ['Brandon', 'Brenda', 'Dylan', 'Andrea', 'Steve', 'Kelly', 'Donna',

'David'];

let removed1 = beverlyHillsGang.splice(1, 2);

console.log(removed1);



let seinfeld = ['Jerry', 'George', 'Kramer', 'Newman', 'Elaine'];

let removed2 = seinfeld.splice(-2, 1);

console.log(removed2);



let brooklynNineNine = ['Jake', 'Amy', 'Charles','Rosa', 'Captain Holt', 'Gina', 'Terry'];

let removedAndInserted = brooklynNineNine.splice(5, 1, 'Hitchcock', 'Scully');

console.log(removedAndInserted);

console.log(brooklynNineNine);



let friends = ['Ross', 'Rachel', 'Joey', 'Chandler', 'Monica', 'Phoebe'];

let insertedOnly = friends.splice(1, 0, 'Gunther', 'Carol', 'Susan');

console.log(insertedOnly);

console.log(friends);
