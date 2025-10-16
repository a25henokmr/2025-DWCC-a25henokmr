'use strict';

function capitalizeName(name) {
  const names = name.toLowerCase().split(' ');
  const namesUpper = [];

  for (const name of names) {
    namesUpper.push(name.replace(name[0], name[0].toUpperCase()));
  }
  return namesUpper.join(' ');
}

console.log(capitalizeNmae('jessica ann smith davis'));
