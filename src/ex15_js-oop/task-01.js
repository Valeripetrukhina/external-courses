var candy = {
  weight: 50,
};

var chocolateMilk = Object.create(candy);

chocolateMilk = {
  percentageChocolate: "40%",
  chocolate: function () {
    console.log("Milk chocolate melts quickly");
  },
};
var chocolateDark = Object.create(candy);

chocolateDark = {
  percentageChocolate: "75%",
  chocolate: function () {
    console.log("Dark chocolate does not melt well");
  },
};
var chocolateBitter = Object.create(candy);

chocolateBitter = {
  percentageChocolate: "80%",
  chocolate: function () {
    console.log("Bitter chocolate does not melt well");
  },
};

var fillingPlum = Object.create(candy);

fillingPlum = {
  percentageChocolate: "45%",
  filling: function () {
    console.log("Inside plum");
  },
};

var fillingPrune = Object.create(candy);

fillingPrune = {
  percentageChocolate: "50%",
  filling: function () {
    console.log("Inside prune");
  },
};

var fillingApricots = Object.create(candy);

fillingApricots = {
  percentageChocolate: "55%",
  filling: function () {
    console.log("Inside dried apricots");
  },
};

var childGift = [];
childGift.push(
  chocolateMilk,
  chocolateDark,
  chocolateBitter,
  fillingPlum,
  fillingPrune,
  fillingApricots
);

var childGiftWeight1 = function () {
  console.log(childGift.length * candy.weight);
};

var sortGift = childGift;
sortGift.sort(function (a, b) {
  if (a.percentageChocolate > b.percentageChocolate) return 1;
  if (a.percentageChocolate < b.percentageChocolate) return -1;
  return 0;
});
sortGift.forEach(function (sortGift) {
  console.log(sortGift);
});

var findInGift = function (name) {
  console.log(childGift.this.name);
};
