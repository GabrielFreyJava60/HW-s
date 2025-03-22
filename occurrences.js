export function occurrences(strings) {
 
  const resObj = {}; 
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

console.log(occurrences(["a", "b", "a", "c", "b", "a", "d"]));
