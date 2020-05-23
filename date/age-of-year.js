function ageOfYear(birthDay) {
  var arr = birthDay.split('/');
  var lastYear = +arr[0] + 100 + '';

  var birthTimestamp = new Date(birthDay).getTime();
  var deathTimestamp = new Date([lastYear, arr[1], arr[2]].join('/')).getTime();
  var nowTimestamp = Date.now();

  return (
    ((nowTimestamp - birthTimestamp) / (deathTimestamp - birthTimestamp)) * 100
  );
}

console.log(ageOfYear('1995/03/12'));
