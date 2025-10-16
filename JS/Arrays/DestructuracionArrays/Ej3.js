const flightsInfo =
  '_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30';

function getCode(str) {
  return str.slice(0, 3).toUpperCase();
}

for (const flight of flightsInfo.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = type
    .replaceAll('_', ' ')
    .getCode(from)
    .getCode(to)
    .time.replace(':', 'h')
    .padStart(36);
  console.log(output);
}
