class ElectricalAppliances {
  constructor(name, watt, connect) {
    this.name = name;
    this.watt = watt;
    this.connect = connect;
  }
  attention() {
    console.log(`Do not use ${this.name} in faulty condition`);
  }
}

class Room extends ElectricalAppliances {
  constructor(technicArr) {
    super(name);

    this.technicArr = technicArr;
  }
  powerConsumption() {
    let consumption = 0;
    for (let i = 0; i < this.technicArr.length; i++) {
      if (this.technicArr[i].connect === true) {
        consumption += this.technicArr[i].watt;
      }
    }
    console.log(consumption);
  }
  foundName(whatName) {
    this.whatName = whatName;

    console.log(
      this.technicArr.find(function (element) {
        if (element.name === this.whatName);
        return element.name;
      })
    );
  }
}

let washer = new ElectricalAppliances("washer", 200, true);
let electricStove = new ElectricalAppliances("electric stove", 150, true);
let vacuumCleaner = new ElectricalAppliances("vacuum cleaner", 100, true);
let laptop = new ElectricalAppliances("laptop", 80, false);
let telephone = new ElectricalAppliances("telephone", 50, false);

let myRoom = new Room([
  washer,
  electricStove,
  vacuumCleaner,
  laptop,
  telephone,
]);
