const who = ["The dog", "My granma", "His turtle", "My bird"];
const action = ["ate", "pissed", "crushed", "broked"];
const what = ["my homework", "the car", "my phone"];
const when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

function generateExcuse() {
  const whoIndex = Math.floor(Math.random() * who.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const whatIndex = Math.floor(Math.random() * what.length);
  const whenIndex = Math.floor(Math.random() * when.length);
  return `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}.`;
}

window.addEventListener("DOMContentLoaded", () => {
  const excuseP = document.getElementById("excuse");
  const btn = document.getElementById("generate-btn");
  btn.addEventListener("click", () => {
    excuseP.textContent = generateExcuse();
  });
});
