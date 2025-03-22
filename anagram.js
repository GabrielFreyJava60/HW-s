export function isAnagram(string, anagram) {
  if (typeof string !== "string" || typeof anagram !== "string") {
    return false;
}
  //takes two parameters: string  and anagram
  //returns true if parameter anagram contains the same letters as
  //the given string with the same counters of occurrences
  //otherwise false
  let result = false;
  if (string.length === anagram.length) {
    const letterOccurrences = getLetterOccurrences(string);
    result = isAnagramOccurrences(letterOccurrences, anagram);
  }

  return result;
}
function getLetterOccurrences(string) {
  return [...string].reduce(
    (acc, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc),
    {}
  );
}

function isAnagramOccurrences(letterOccurrences, anagram) {
  return [...anagram].every((letter) => --letterOccurrences[letter] >= 0);
}


