"use strict";
exports.__esModule = true;
var getHello = function (s) {
    return "";
};

var heroes = ["thor", "spiderman", "ironman"];

const Hero = heroes.map((hero) =>  {
    return "Hero is ".concat(hero);
});

console.log(Hero)


