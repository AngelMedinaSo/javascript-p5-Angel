const car = {
  name: "Golf",
  brand: "Volkswagen",
  year: 2008,
  mileage: 145000,
  description() {
    // Vul in: geef een zin terug met this.name en this.brand via template literal
    return `Your ${this.name} is from a brand called ${this.brand}`;
  },
  isOld() {
    // Vul in: geef true terug als het year voor 2010 is
    return this.year < 2010;
  },
  drive(km) {
    // Vul in: verhoog this.mileage met km en geef de nieuwe km-stand terug
    this.mileage += km;
    return this.mileage;
  },
};

// Toon de resultaten in de drie output-elementen
const output1 = document.querySelector("#output-1");
const output2 = document.querySelector("#output-2");
const output3 = document.querySelector("#output-3");

output1.textContent = car.description();
output2.textContent = `Is your car made before 2010? ${car.isOld()}`;
output3.textContent = `You drove 99 more km, it means that you have driven a total of ${car.drive(99)} km`;