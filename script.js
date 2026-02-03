const dialects = [
  { word: "たまるかえ", meaning: "とても・すごく" },
  { word: "いぬ", meaning: "帰る" },
  { word: "こじゃんと", meaning: "たくさん" },
  { word: "はちきん", meaning: "活発な女性" },
  { word: "なまこ", meaning: "怠け者" }
];

const btn = document.getElementById("btn");
const dialect = document.getElementById("dialect");
const meaning = document.getElementById("meaning");

btn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * dialects.length);
  dialect.textContent = dialects[r].word;
  meaning.textContent = "意味：" + dialects[r].meaning;
});
