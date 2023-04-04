const one = {
  name: "Jagdish Kumawat",
  age: 24,
  location: "Banglore",

  introduction() {
    console.log(`${this.name} is very good boy..`);
  },
};

const two = {
  name: "Rajeswar Bhagat",
  age: 23,
  location: "Gandhidham",
};

one.introduction();

one.introduction.call(two);
