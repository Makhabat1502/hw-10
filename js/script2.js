class Cars {

    constructor(model, year, power, color) {
      this.model = model;
      this.year = year;
      this.power = power;
      this.color = color;
    }

  
    showInfo() {
        return `
            Model: ${this.model}
            Year: ${this.year}
            Power: ${this.power}
            Color: ${this.color}
        `;
    }
}

class ElectroCars extends Cars {
    constructor(model, year, power, color, battery) {
      super(model, year, power, color);
      this.battery = battery;
    }

    showInfo() {
        super.showInfo();
        return `
            Battery: ${this.battery}<br>     
        `;
    }

    promote() {
        return `
         ${this.model} loniq 5 – электрокар с действительно нетривиальной внешностью и прогрессивным салоном, который предлагается как в заднеприводных, так и в полноприводных версиях.
        `;
    }

  }
  
const toyota = new Cars('Toyota', 2020, 150, 'black');
const mercedes = new Cars('Mercedes', 2010, 150, 'red')
console.log(toyota.showInfo());
console.log(mercedes.showInfo());

const hyundai = new ElectroCars("Hyundai", 2020, 150, 'orange', 2500);
console.log(hyundai.showInfo());
console.log(hyundai.promote());