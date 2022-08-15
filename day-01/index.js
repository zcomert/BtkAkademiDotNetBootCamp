console.log("Hello world.");

document.getElementById("root").innerHTML = "Merhaba";

const arr = [
  {
    id: 1,
    name: "Sude Akgün",
    age: 19,
  },
  {
    id: 2,
    name: "Ahmet Güneş",
    age: 25,
  },
  {
    id: 3,
    name: "Ömer Dağ",
    age: 37,
  },
];

for (let person of arr) {
  const element = document.createElement("div");
  element.innerHTML = `${person.id} ${person.name} ${person.age}`;
  document.getElementById("root").append(element);
}
