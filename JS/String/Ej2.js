const cadea = 'I am a string';

function reverseString(cadea) {
  let novaCadea = '';
  const largo = cadea.length;
  for (let i = largo - 1; i >= 0; i--) {
    novaCadea = novaCadea + cadea.at(i);
  }
  return novaCadea;
}

console.log(reverseString(cadea));
