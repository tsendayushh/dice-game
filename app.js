//Тоглогчийн ээлжийг хадгалах хувьсагч. 1-р тоглогчийн 0, 2-р тоглогчийг 1 гэе.
var activePlayer = 1;

//Тоглогчийн оноог хадгалах хувьсагч хийнэ хувьсагч;
var score = [0,0];

//Тоглогчийн нэг ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шоог хаяахад хэд буухыг хадгалах хувьсагч, 1-6 гэсэн утгыг санамсаргүйгээр оноох
// var diceNumber = Math.floor(Math.random()*6) + 1;

//console.log('Шоо : '+ diceNumber + ' гэж буулаа.'); // Буусан шооны тоо


/* Тоглогчийн энэ үе дэх оноог 0 болгов.
<div class="player-score" id="score-0">43</div>
<div class="player-score" id="score-1">72</div>*/
window.document.getElementById('score-0').textContent = '0';
window.document.getElementById('score-1').textContent = '0';

//Тоглогчийн нийт цуглуулсан оноог 0 болгов.
window.document.getElementById('current-0').textContent = '0';
window.document.getElementById('current-1').textContent = '0';

var diceDom = document.querySelector(".dice");

document.querySelector('.btn-roll').addEventListener("click", function() {
    var diceNumber = Math.floor(Math.random()*6) + 1;

    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';
});
