export function occurrences(strings) {
  //takes array of repeated strings
  //returns array of sorted strings with information about how many times the original string occurs in original array
  const resObj = {}; //key string from strings array, value - counter of occurrences
  fillObj(strings, resObj);
  const resArray = getResArray(resObj);
  resArray.sort();
  return resArray;
}

function fillObj(strings, resObj) {
  strings.forEach((str) => {
    if (resObj[str] == undefined) {
      resObj[str] = 0;
    }
    resObj[str]++;
  });
}
function getResArray(resObj) {
  const res = [];
  for (const key in resObj) {
    res.push(`${key}=>${resObj[key]}`);
  }
  return res;
}

console.log(occurrences(["a", "b", "a", "c", "b", "a", "d"])); //["a=>3", "b=>2", "c=>1", "d=>1"]
