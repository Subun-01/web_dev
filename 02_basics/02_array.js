const marvel_hero = ["thor" , "iron man","spiderman"]
const dc_hero=["superman","flash","batman","cyborg"]

// marvel_hero.push(dc_hero)
// console.log(marvel_hero[3][0]);

// const all_hero=marvel_hero.concat(dc_hero)
// console.log(marvel_hero);
// console.log(all_hero);

// const all_hero=[...marvel_hero,...dc_hero]
// console.log(marvel_hero);
// console.log(all_hero);

// const another_array = [1,2,3,[5,6,7],9,[5,7,[6,[7,[[6,[3,[9,[2,[5]]]]]],8]]]]
// console.log(another_array)
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Ironman"))  // bool
console.log(Array.from("Ironman"))  // convert to array
console.log(Array.from({name: "Ironman"})) //**********

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score1,score2,score3));

