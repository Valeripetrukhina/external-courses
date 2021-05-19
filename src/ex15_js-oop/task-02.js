class ElectricalAppliances {
  constructor(name) {
    this.name = name;
  }

  power(watt) {
    this.watt = watt;
    return this.watt;
  }
}

class LargeMachinery extends ElectricalAppliances {
  connect() {
    console.log(`${this.name} works from the socket.`);
  }
}

class SmallTechnique extends ElectricalAppliances {
  battery() {
    console.log(`${this.name} has a battery.`);
  }
}

let washer = new LargeMachinery("washer");
let electricStove = new LargeMachinery("electric stove");
let vacuumCleaner = new LargeMachinery("vacuum cleaner");
let laptop = new SmallTechnique("laptop");
let telephone = new SmallTechnique("telephone");

let socket = [];
socket.push(washer);
socket.push(electricStove);
socket.push(vacuumCleaner);
console.log(socket);

function powerConsumption() {
  let consumption =
    washer.power(200) + electricStove.power(150) + vacuumCleaner.power(100);
  console.log(`Power consumption of connected devices = ${consumption} watt.`);
}

let room = [];

powerConsumption();
