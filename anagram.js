export function isAnagram(string, anagram) {
  if (typeof string !== "string" || typeof anagram !== "string") {
    return false;
}
 
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


