const birthToMagic = {'1': 'ひかり', '2': 'いやし', '3': 'ひらめき', '4': 'まもり', '5': 'つながり', '6': 'ととのえ', '7': 'まなび', '8': 'ひかり', '9': 'いやし', '10': 'ひらめき', '11': 'まもり', '12': 'つながり', '13': 'ととのえ', '14': 'まなび', '15': 'ひかり', '16': 'いやし', '17': 'ひらめき', '18': 'まもり', '19': 'つながり', '20': 'ととのえ', '21': 'まなび', '22': 'ひかり', '23': 'いやし', '24': 'ひらめき', '25': 'まもり', '26': 'つながり', '27': 'ととのえ', '28': 'まなび', '29': 'ひかり', '30': 'いやし', '31': 'ひらめき'};
const sweetNames = {'choco': 'チョコレート', 'dorayaki': 'どらやき', 'montblanc': 'モンブラン', 'yokan': 'ようかん', 'dango': 'だんご', 'choux': 'シュークリーム', 'pudding': 'プリン', 'berrycake': 'ベリーケーキ', 'millefeuille': 'ミルフィーユ'};

function showResult() {
    const day = document.getElementById("birthday").value;
    if (!day || !selectedSweet) {
        alert("生まれた日とスイーツカードを選んでください！");
        return;
    }
    const magic = birthToMagic[day];
    const sweet = sweetNames[selectedSweet];
    const title = `あなたのまほうタイプは「${magic}のまほう × ${sweet}」です。`;
    document.getElementById("result").innerHTML = 
        `<h2>診断結果</h2>
        <p>${title}</p>
        <p>このページを保存して、壁紙やお守りとして使ってね！</p>
        <p>くわしいPDF診断や特典はLINEで配布中♪</p>
        <p><img src='qr_sample.png' width='150' alt='LINE QR'></p>`;
}
