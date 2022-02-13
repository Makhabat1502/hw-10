class Restaurant {
    constructor(name, cuisineType, served) {
      this.name = name,
      this.cuisineType = cuisineType;
      this.served = 0;
    }
  
    showInfo() {
        return `
        Ресторан: ${this.name}
        Тип кухни: ${this.cuisineType}
        `;
    }

    isOpen() {
        let currentHour = new Date().getHours();
        let currentDay = new Date().getDay();
    
        if (currentDay === 6 || currentDay === 0) {
          return `${this.name} is closed`;
        } else {
          if (currentHour > 9 && currentHour < 22) {
            return `${this.name} is open`;
          } else {
            return `${this.name} is closed`;
          }
        }
      }

    serve() {
        return this.served++;
    }

    setServed(guests){
        return this.served += guests;
    }

    showTotalServed(){
        return `Total served: ${this.served}`;
    }
}
  
const alatoo = new Restaurant('Ala-Too', 'kyrgyz');

console.log(alatoo.showInfo());
console.log(alatoo.isOpen());
console.log(alatoo.serve());
console.log(alatoo.setServed(2));
console.log(alatoo.showTotalServed());