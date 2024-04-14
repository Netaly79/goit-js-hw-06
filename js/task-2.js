class Storage {
  #items;
  constructor(collection) {
    this.#items = collection;
  }
  getItems() {
    return this.#items;
  }
  addItem(item) {
    this.#items.push(item);
  }
  removeItem(item) {
    return (this.#items = this.#items.filter((i) => i !== item));
  }
}

console.log(`==== Task 2 ====`);
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
