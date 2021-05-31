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

function ChildGift(giftArr) {
  this.gift = giftArr;

  this.giftWeight = function () {
    var weight = 0;
    for (i = 0; i < this.gift.length; i++) {
      weight += this.gift[i].weight;
    }
    console.log(weight);
  };

  this.sortGift = function () {
    var sortGift = this.gift;
    sortGift.sort(function (a, b) {
      return a.weight > b.weight ? 1 : -1;;
    });
    sortGift.forEach(function (sortGift) {
      console.log(sortGift);
    });
  };
  this.foundName = function (name) {
    this.name = name;
    console.log(
      this.gift.find(function (element) {
        if (element.name === this.name);
        return element.name;
      })
    );
  };
}

var myGift = new ChildGift([milka, alpenGold, chocBitter, chocBar, wafer]);
console.log(myGift.foundName("Milka"));
console.log(myGift.sortGift());
console.log(myGift.giftWeight());
