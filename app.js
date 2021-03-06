// Кодыг амархан мөн хурдөн болгохын тулд queryselector function -ийг объектэд оноож өгөв.
var diceDom = document.querySelector(".dice1");

// Тоглоом эхлэхэд гэрч ирэх 設定
var activePlayer,score,roundScore;
var isGameOver;
initGame();


// ----------Шоог шидэх event listener------------------------------------------------
document.querySelector('.btn-roll').addEventListener("click", function() {
    if(isGameOver === false) {
        
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
        playerSwitch();
    }
    }
    else {
        alert('Game is over you dumbass!\n if you want to play again click the New Game button!')
    }

});

//-------------- Hold товчны eventListener-----------------------------------
document.querySelector('.btn-hold').addEventListener("click", function() {
    if (isGameOver === false) {
        // Уг тоглогчийн ээлжиндээ цуглуулсан оноог Global оноон дээр нь нэмнэ
        score[activePlayer] = score[activePlayer] + roundScore;

        //Тоглогч хожсон эмэхийг шалгах, хэрэв хожсон бол ХОЖСОН гэдгийг нэрнийх нь оронд үзүүлэх
        if( score[activePlayer] >= 100 ) {
            isGameOver = true;
            document.getElementById('name-' + activePlayer).textContent = 'WINNER WINNER CHICKEN DINNER!';
        }
    
        //Тоглогчийн оноог дэлгэцэнд үзүүлэх
        document.getElementById('score-' + activePlayer).textContent= score[activePlayer];

        playerSwitch(); 
    }
    
    else {
        alert('Game is over you dumbass!\n if you want to play again click the New Game button!')
    }  
})

//----------------- New game Event listener ------------------------------------
document.querySelector(".btn-new").addEventListener('click', function() {
    initGame();

})

function playerSwitch() {
    //Ээлжийн оноог нь 0 болгож 
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';

    //тоглогчийн ээлжийг сольно.
    
    //Тоглогчийн ээлжийг солих үйлдэл
    activePlayer === 0 ? activePlayer=1 : activePlayer= 0;

    // Улаан цэг болон арын суурь өнгийг солих үйлдэл
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");

    //Шоог түр алга болгоно
    diceDom.style.display = 'none';
}

function initGame() {

    // Тоглоом дуусаагүй байгааг илтгэх
    isGameOver = false;
    //Тоглогчийн ээлжийг хадгалах хувьсагч. 1-р тоглогчийн 0, 2-р тоглогчийг 1 гэе.
    activePlayer = 0;

    //Тоглогчийн оноог хадгалах хувьсагч хийнэ хувьсагч;
    score = [0,0];

    //Тоглогчийн нэг ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    roundScore = 0;

    // Тоглогчийн энэ үе дэх оноог 0 болгов.
    window.document.getElementById('score-0').textContent = '0';
    window.document.getElementById('score-1').textContent = '0';

    //Тоглогчийн нийт цуглуулсан оноог 0 болгов.
    window.document.getElementById('current-0').textContent = '0';
    window.document.getElementById('current-1').textContent = '0';

    diceDom.style.display = "none";

    document.querySelector('.player-0-panel').classList.add("active");
    document.querySelector('.player-1-panel').classList.remove("active");

    
    //Тоглогчийн нэр авах үйлдэл
    document.getElementById('name-0').textContent= prompt('ホールドポイントが60以上になった側の勝ちです。\nТоглогч 1-ийн  нэрийг оруулна уу1');
    document.getElementById('name-1').textContent= prompt('Тоглогч 2-ийн  нэрийг оруулна уу1');

}