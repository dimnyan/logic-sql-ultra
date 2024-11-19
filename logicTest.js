const array = ["cook", "save", "taste", "aves", "vase", "state", "map"];

const groups = new Map();

for (const string of array){
    const sortedString = string.split("").sort().join("");
    
    if (groups.has(sortedString)){
        groups.get(sortedString).push(string);
    } else {
        groups.set(sortedString, [string])
    }
}

console.log(Array.from(groups.values()))