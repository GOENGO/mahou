
function goToStep2() {
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}
function showResult(sweet) {
  const birthDay = parseInt(document.getElementById("birthDay").value, 10);
  const card = document.querySelector('input[name="card"]:checked');
  if (!birthDay || !card) {
    alert("すべて選択してください");
    return;
  }
  const cardVal = parseInt(card.value, 10);
  const type = (birthDay + cardVal) % 7;
  const messages = [
    "ひかりのまほう",
    "いやしのまほう",
    "ひらめきのまほう",
    "まもりのまほう",
    "うごきのまほう",
    "つながりのまほう",
    "しんじるまほう"
  ];
  const result = `あなたの生まれ持ったまほう力は「${messages[type]}」。今日のスイーツは「${sweet}」です。`;
  document.getElementById("resultText").innerText = result;
  document.getElementById("step2").style.display = "none";
  document.getElementById("result").style.display = "block";
}
