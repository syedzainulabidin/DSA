let check = (first, second) => {
  for (let i = 0; i < second.length; i++) {
    let found = false;
    for (let j = 0; j < first.length; j++) {
      if (first[j].toLowerCase() == second[i].toLowerCase()) {
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
};

console.log(check("ab", "A"));
console.log(check("ab", "c"));