function Candy(name, weight, chocolate, filling) {
  this.name = name;
  this.weight = weight;
  this.chocolate = chocolate;
  this.filling = filling;
}

Candy.prototype = {
  chocolate: function () {
    console.log(this.chocolate + " chocolate with " + this.filling);
  },
};

var milka = new Candy("Milka", 40, "milk", "blowberry");
var alpenGold = new Candy("Alpen Gold", 50, "dark", "prune");
var chocBitter = new Candy("Premium", 60, "bitter", "plum");
var chocBar = new Candy("Bar", 45, "milk", "prune");
var wafer = new Candy("Wafer", 30, "milk", "plum");

var childGift = [];
childGift.push(milka, alpenGold, chocBitter, chocBar, wafer);

console.log(childGift);

var childGiftWeight1 = function () {
  console.log(
    milka.weight +
      alpenGold.weight +
      chocBitter.weight +
      chocBar.weight +
      wafer.weight
  );
};
childGiftWeight1();

var sortGift = childGift;
sortGift.sort(function (a, b) {
  if (a.weight > b.weight) return 1;
  if (a.weight < b.weight) return -1;
  return 0;
});
sortGift.forEach(function (sortGift) {
  console.log(sortGift);
});

function foundName(name) {
  this.name = name;
  console.log(
    childGift.find(function (element) {
      if (element.name === this.name) {
       return element.name;
      }
      return element.name
      }));
}
