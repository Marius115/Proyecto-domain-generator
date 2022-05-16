//write your code here

var pronouns = ["the", "our"];
var adjs = ["giant", "sus", "legit"];
var nouns = ["proyect", "potato", "job"];
var extensions = [".com", ".net", ".ua"];

for (let pronoun of pronouns) {
  for (let adj of adjs) {
    for (let noun of nouns) {
      for (let extension of extensions) {
        console.log(pronoun + adj + noun + extension);
      }
    }
  }
}
