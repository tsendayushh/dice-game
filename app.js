//Тоглогчийн ээлжийг хадгалах хувьсагч. 1-р тоглогчийн 0, 2-р тоглогчийг 1 гэе.
var activePlayer = 1;

//Тоглогчийн оноог хадгалах хувьсагч хийнэ хувьсагч;
var score = [0,0];

//Тоглогчийн нэг ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шоог хаяахад хэд буухыг хадгалах хувьсагч, 1-6 гэсэн утгыг санамсаргүйгээр оноох
var dice = Math.floor(Math.random()*6) + 1;

console.log('Шоо : '+ dice + ' гэж буулаа.'); // Буусан шооны тоо

document.querySelector('.dice').style.display = "none";

/* Тоглогчийн энэ үе дэх оноог 0 болгов.
<div class="player-score" id="score-0">43</div>
<div class="player-score" id="score-1">72</div>*/
window.document.querySelector('#score-0').textContent = 0;
window.document.querySelector('#score-1').textContent = 0;

//Тоглогчийн нийт цуглуулсан оноог 0 болгов.
window.document.querySelector('#current-0').textContent = 0;
window.document.querySelector('#current-1').textContent = 0;

console.log('Тоглогчийн энэ үеийн оноо '+ window.document.querySelector('#score-0').textContent + ' байна.');