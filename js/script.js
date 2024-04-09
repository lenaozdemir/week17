const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

class Transport {
  constructor(image, type, price, brand) {
    this.image = image;
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  getInfo() {
    return `Type: ${this.type}, Brand: ${this.brand}`;
  }

  getPrice() {
    return `Price: ${this.price}`;
  }
}

class Car extends Transport {
  constructor(image, type, price, brand, doors) {
    super(image, type, price, brand);
    this.doors = doors;
  }

  getDoorsCount() {
    return `Number of doors: ${this.doors}`;
  }
}

class Bike extends Transport {
  constructor(image, type, price, brand, maxSpeed) {
    super(image, type, price, brand);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return `Max speed: ${this.maxSpeed}`;
  }
}

const cars = [];
const bikes = [];

data.forEach((item) => {
  if (item.type === "car") {
    const car = new Car(
      item.image,
      item.type,
      item.price,
      item.brand,
      item.doors
    );
    cars.push(car);
  } else if (item.type === "bike") {
    const bike = new Bike(
      item.image,
      item.type,
      item.price,
      item.brand,
      item.maxSpeed
    );
    bikes.push(bike);
  }
});

console.log(cars);
console.log(bikes);

const carDiv = document.querySelector(".auto__cars");
const bikeDiv = document.querySelector(".auto__bikes");
console.log(carDiv);

cars.forEach((car) => {
  const carBox = document.createElement("div");
  carBox.classList.add("auto__box");
  carDiv.appendChild(carBox);

  const carName = document.createElement("p");
  carName.classList.add("auto__name");
  carBox.appendChild(carName);
  carName.textContent = car.brand;

  const carImg = document.createElement("div");
  carImg.classList.add("auto__img");
  carBox.appendChild(carImg);
  carImg.style.backgroundImage = `url(${car.image})`;

  const carDoors = document.createElement("p");
  carDoors.classList.add("auto__car-doors");
  carBox.appendChild(carDoors);
  carDoors.textContent = `Number of the doors: ${car.doors}`;

  const carPrice = document.createElement("p");
  carPrice.classList.add("auto__price");
  carBox.appendChild(carPrice);
  carPrice.textContent = `Price: ${car.price} ₽`;
});

bikes.forEach((bike) => {
  const bikeBox = document.createElement("div");
  bikeBox.classList.add("auto__box");
  bikeDiv.appendChild(bikeBox);

  const bikeName = document.createElement("p");
  bikeName.classList.add("auto__name");
  bikeBox.appendChild(bikeName);
  bikeName.textContent = bike.brand;

  const bikeImg = document.createElement("div");
  bikeImg.classList.add("auto__img");
  bikeBox.appendChild(bikeImg);
  bikeImg.style.backgroundImage = `url(${bike.image})`;

  const bikeMaxSpeed = document.createElement("p");
  bikeMaxSpeed.classList.add("auto__bike-max-speed");
  bikeBox.appendChild(bikeMaxSpeed);
  bikeMaxSpeed.textContent = `Max speed: ${bike.maxSpeed} km/h`;

  const bikePrice = document.createElement("p");
  bikePrice.classList.add("auto__price");
  bikeBox.appendChild(bikePrice);
  bikePrice.textContent = `Price: ${bike.price} ₽`;
});
