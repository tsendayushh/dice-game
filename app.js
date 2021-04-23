//Тоглогчийн ээлжийг хадгалах хувьсагч. 1-р тоглогчийн 0, 2-р тоглогчийг 1 гэе.
var activePlayer = 0;

//Тоглогчийн оноог хадгалах хувьсагч хийнэ хувьсагч;
var score = [0,0];

//Тоглогчийн нэг ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Тоглогчийн энэ үе дэх оноог 0 болгов.
window.document.getElementById('score-0').textContent = '0';
window.document.getElementById('score-1').textContent = '0';

//Тоглогчийн нийт цуглуулсан оноог 0 болгов.
window.document.getElementById('current-0').textContent = '0';
window.document.getElementById('current-1').textContent = '0';

// Кодыг амархан мөн хурдөн болгохын тулд queryselector function -ийг объектэд оноож өгөв.
var diceDom = document.querySelector(".dice");
diceDom.display = "none";

// Шоог шидэх event listener
document.querySelector('.btn-roll').addEventListener("click", function() {

    //Шоог хаяахад хэд буухыг хадгалах хувьсагч, 1-6 гэсэн утгыг санамсаргүйгээр оноох
    var diceNumber = Math.floor(Math.random()*6) + 1;

    // Буусан шооны тоонд харгалзах зургийг дэлгэцэн дээр гаргаж ирэх 
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';

    // Шоо 1-ээс өөр тоо буусан тохиолдолд тоглогчийн ээлжийн оноог нэмэгдүүлэх
    if(diceNumber !== 1) {
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {

        //энэ тоглогчийн энэ үед цуглуулсан оноог 0 болгоно
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        diceDom.style.display = 'none';

        //Тоглогчийн ээлжийг солих үйлдэл
        activePlayer === 0 ? activePlayer=1 : activePlayer= 0;

        // Улаан цэг болон арын суурь өнгийг солих үйлдэл
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");
    }
});
