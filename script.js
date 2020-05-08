let game_area;
let game_area_width = 1200;
let game_area_height = 400;
let player;
let cel;
let karakterPos = {x: 0, y: 0};
let ermek = [];
let halalok = 0;
let szint = 1;
let myaudio;
let coinSound;

$(document).ready(function () {
    game_area = $('#game_area');

    $(window).on('keydown', moveKarakter);
    setInterval(checkCollision, 20000);
    myaudio = new Audio('music.mp3');
    myaudio.loop = true;
    coinSound = new Audio('coinSound.mp3');
});

function indit() {
    myaudio.play();
    halalok = 0;
    game_area.empty();
    init(true);
    $('#gomb').val('Újraindít');
}

function init(bool) {
    szint = 1;
    $('#halal').text('Halálok száma: ' + halalok);
    tisztit();
    addPlayer();
    addCel();
    addCoins();
    if(bool){
        addEnemy();
        ellensegMozgatFent();
        ellensegMozhatLent();
    }
}

function initPaja2(bool){
    tisztit();
    karakterPos.x = 0;
    karakterPos.y = 0;
    $('#halal').text('Halálok száma: ' + halalok);
    addPlayer2();
    addCel2();
    addCoins2();
    if(bool){
        $('.ellenseg').remove();
        addEnemy2();
        ellensegMozgat2();
    }
}

function initPaja3(bool){
    tisztit();
    karakterPos.x = 0;
    karakterPos.y = 0;
    $('#halal').text('Halálok száma: ' + halalok);
    addPlayer();
    addCel();
    addCoins();
    addCoins2();
    if(bool){
        addEnemy();
        ellensegMozgatFent();
        ellensegMozhatLent();
    }
}

function win() {
    game_area.empty();
    let winFelirat = $('<h1 id="wintext">Nyertél!</h1>');
    let nevInput = $('<div class="nev"><input placeholder="Név" class="nev" type="text" /></div>');
    let nevButton = $('<div class="rekordGomb"><button class="rekordGomb" onclick="eredmenyKuld()">Küld</button></div>');
    game_area.append(winFelirat);
    game_area.append(nevInput);
    game_area.append(nevButton);

}

function tisztit(){
    $( ".coin" ).remove();
    $( "#jatekos" ).remove();
    $( "#cel" ).remove();
    ermek = [];
}

function checkCollision(){
    $('.ellenseg').each(function() {
        enemyPos = {
            x: $(this).position().left,
            y: $(this).position().top
        };

        if (distance(karakterPos, enemyPos) < 30) {
            karakterPos.x = 0;
            karakterPos.y = 0;
            halalok++;

            switch (szint) {
                case 1:
                    init(false);
                    break;
                case 2:
                    initPaja2(false);
                    break;
                case 3:
                    initPaja3(false);
                    break;
            }

        }
    });
}

function distance(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;

    return Math.sqrt(dx*dx + dy*dy);
}

function ellensegMozgatFent(){
    let ellensegek = $('.ellenseg_fent');

    ellensegek.animate({
        top:  game_area_height - 40
    }, 1000, function () {
        ellensegek.animate({
            top: 0
        }, 1000);
        ellensegMozgatFent();
    });
}

function ellensegMozhatLent() {

    let ellensegek = $('.ellenseg_lent');
    ellensegek.animate({
        top:  0
    }, 1000, function () {
        ellensegek.animate({
            top: game_area_height - 40
        }, 1000);
        ellensegMozhatLent();
    });
}

function ellensegMozgat2(){

    ellensegMozgat2_1();
    ellensegMozgat2_2();
    ellensegMozgat2_3();
    ellensegMozgat2_4();
}
function ellensegMozgat2_1() {
    let ellenseg = $('.ellenseg1');
    ellenseg.animate({
        left: game_area_width/2 + 140 - 20,
        top: game_area_height/2 - 140 - 20
    }, 700, function () {
        ellenseg.animate({
            left: game_area_width/2 + 140 - 20,
            top: game_area_height/2 + 140 - 20
        }, 700, function () {
            ellenseg.animate({
                left: game_area_width/2 - 140 - 20,
                top: game_area_height/2 + 140 - 20
            }, 700, function () {
                ellenseg.animate({
                    left: game_area_width/2 - 140 - 20,
                    top: game_area_height/2 - 140 - 20
                }, 700, function () {
                    ellensegMozgat2_1();
                });

            });
        });

    });
}
function ellensegMozgat2_2() {
    let ellenseg = $('.ellenseg2');
    ellenseg.animate({
        left: game_area_width/2 + 140 - 20,
        top: game_area_height/2 + 140 - 20
    }, 700, function () {
        ellenseg.animate({
            left: game_area_width/2 - 140 - 20,
            top: game_area_height/2 + 140 - 20
        }, 700, function () {
            ellenseg.animate({
                left: game_area_width/2 - 140 - 20,
                top: game_area_height/2 - 140 - 20
            }, 700, function () {
                ellenseg.animate({
                    left: game_area_width/2 + 140 - 20,
                    top: game_area_height/2 - 140 - 20
                }, 700, function () {
                    ellensegMozgat2_2();
                });

            });
        });

    });
}
function ellensegMozgat2_3() {
    let ellenseg = $('.ellenseg3');
    ellenseg.animate({
        left: game_area_width/2 - 140 - 20,
        top: game_area_height/2 + 140 - 20
    }, 700, function () {
        ellenseg.animate({
            left: game_area_width/2 - 140 - 20,
            top: game_area_height/2 - 140 - 20
        }, 700, function () {
            ellenseg.animate({
                left: game_area_width/2 + 140 - 20,
                top: game_area_height/2 - 140 - 20
            }, 700, function () {
                ellenseg.animate({
                    left: game_area_width/2 + 140 - 20,
                    top: game_area_height/2 + 140 - 20
                }, 700, function () {
                    ellensegMozgat2_3();
                });

            });
        });

    });
}
function ellensegMozgat2_4() {
    let ellenseg = $('.ellenseg4');
    ellenseg.animate({
        left: game_area_width/2 - 140 - 20,
        top: game_area_height/2 - 140 - 20
    }, 700, function () {
        ellenseg.animate({
            left: game_area_width/2 + 140 - 20,
            top: game_area_height/2 - 140 - 20
        }, 700, function () {
            ellenseg.animate({
                left: game_area_width/2 + 140 - 20,
                top: game_area_height/2 + 140 - 20
            }, 700, function () {
                ellenseg.animate({
                    left: game_area_width/2 - 140 - 20,
                    top: game_area_height/2 + 140 - 20
                }, 700, function () {
                    ellensegMozgat2_4();
                });

            });
        });

    });
}

function addEnemy(){
    let leptek = game_area_width / 5;

    for(let i = 1; i < 5; i++){
        let ellenseg = $('<img src="enemy.png" />');
        ellenseg.css({
            left: ((i * leptek) - 40),
            top: 0,
            'z-index': 2,
            position: 'absolute',
            height: '40px'
        });
        ellenseg.addClass('ellenseg ellenseg_fent');
        game_area.append(ellenseg);
    }

    for(let i = 1; i < 5; i++){
        let ellenseg = $('<img src="enemy.png" />');
        ellenseg.css({
            left: ((i * leptek) + 40),
            top: game_area_height - 40,
            'z-index': 2,
            position: 'absolute',
            height: '40px'
        });
        ellenseg.addClass('ellenseg ellenseg_lent');
        game_area.append(ellenseg);
    }

}
function addEnemy2() {

    let ellenseg = $('<img src="enemy.png" />');
    ellenseg.css({
        left: game_area_width/2 - 140 - 20,
        top: game_area_height/2 - 140 - 20,
        'z-index': 2,
        position: 'absolute',
        height: '40px'
    });
    ellenseg.addClass('ellenseg ellenseg1');
    game_area.append(ellenseg);

    ellenseg = $('<img src="enemy.png" />');
    ellenseg.css({
        left: game_area_width/2 + 140 - 20,
        top: game_area_height/2 - 140 - 20,
        'z-index': 2,
        position: 'absolute',
        height: '40px'
    });
    ellenseg.addClass('ellenseg ellenseg2');
    game_area.append(ellenseg);

    ellenseg = $('<img src="enemy.png" />');
    ellenseg.css({
        left: game_area_width/2 + 140 - 20,
        top: game_area_height/2 + 140 - 20,
        'z-index': 2,
        position: 'absolute',
        height: '40px'
    });
    ellenseg.addClass('ellenseg ellenseg3');
    game_area.append(ellenseg);

    ellenseg = $('<img src="enemy.png" />');
    ellenseg.css({
        left: game_area_width/2 - 140 - 20,
        top: game_area_height/2 + 140 - 20,
        'z-index': 2,
        position: 'absolute',
        height: '40px'
    });
    ellenseg.addClass('ellenseg ellenseg4');
    game_area.append(ellenseg);
}

function moveKarakter(e) {
    let key = e.key;
    karakterPos.x = player.position().left;
    karakterPos.y = player.position().top;

    switch (key) {
        case 'ArrowLeft':
            animacio(karakterPos.x - 10, karakterPos.y);
            break;
        case 'ArrowRight':
            animacio(karakterPos.x + 10, karakterPos.y);
            break;
        case 'ArrowUp':
            animacio(karakterPos.x, karakterPos.y - 10);
            break;
        case 'ArrowDown':
            animacio(karakterPos.x, karakterPos.y + 10);
            break;
    }
    for(let i in ermek){
        if(Math.abs(ermek[i].position().left - karakterPos.x) < 30 && Math.abs(ermek[i].position().top - karakterPos.y) < 30){
            ermek[i].remove();
            ermek.splice(i, 1);
            coinSound.play();
            i--;
        }
    }
    if(karakterPos.x > cel.position().left && karakterPos.x < cel.position().left + 80 && karakterPos.y > cel.position().top && karakterPos.y < cel.position().top + 80 && ermek.length === 0){
        switch (szint) {
            case 1:
                szint++;
                initPaja2(true);
                break;
            case 2:
                szint++;
                initPaja3(true);
                break;
            case 3:
                szint = 1;
                win();
                break;
        }
    }
}
function animacio(x, y) {
    if(x < 0 || x > game_area_width-30 || y < 0 || y > game_area_height-50){
        return;
    }else{
        karakterPos.x = x;
        karakterPos.y = y;
    }
    player.animate({
        left: x,
        top: y
    }, 17);
}

function addCoins(){
    let leptek = game_area_width / 5;
    for(let i = 1; i < 5; i++){
        let coin = $('<img class="coin" src="coin.png" />');
        coin.css({
            left: (i * leptek),
            top: 180,
            'z-index': 1,
            position: 'absolute',
            height: '30px'
        });
        ermek.push(coin);
        game_area.append(coin);
    }

}

function addCoins2(){
    let coin = $('<img class="coin" src="coin.png" />');
    coin.css({
        left: 40,
        top: 40,
        'z-index': 1,
        position: 'absolute',
        height: '30px'
        });
    ermek.push(coin);
    game_area.append(coin);

    coin = $('<img class="coin" src="coin.png" />');
    coin.css({
        left: game_area_width - 70,
        top: 40,
        'z-index': 1,
        position: 'absolute',
        height: '30px'
    });
    ermek.push(coin);
    game_area.append(coin);

    coin = $('<img class="coin" src="coin.png" />');
    coin.css({
        left: 40,
        top: game_area_height - 70,
        'z-index': 1,
        position: 'absolute',
        height: '30px'
    });
    ermek.push(coin);
    game_area.append(coin);

    coin = $('<img class="coin" src="coin.png" />');
    coin.css({
        left: game_area_width - 70,
        top: game_area_height - 70,
        'z-index': 1,
        position: 'absolute',
        height: '30px'
    });
    ermek.push(coin);
    game_area.append(coin);
}

function addPlayer() {
    player = $('<img id="jatekos" src="karakter.png" />');
    player.css({
        left: 0,
        top: game_area_height/2 - 25,
        'z-index': 5,
        position: 'absolute',
        height: '50px'
    });
    game_area.append(player);
}
function addPlayer2() {
    player = $('<img id="jatekos" src="karakter.png" />');
    player.css({
        left: (game_area_width/2 - 20),
        top: game_area_height/2 - 25,
        'z-index': 5,
        position: 'absolute',
        height: '50px'
    });
    game_area.append(player);
}
function addCel() {
    cel = $('<div id="cel" ></div>');
    cel.css({
        left: 1100,
        top: 150,
        position: 'absolute',
        height: '100px',
        width: '100px',
        background: 'green'
    });
    game_area.append(cel);
}
function addCel2() {
    cel = $('<div id="cel" ></div>');
    cel.css({
        left: game_area_width/2 - 50,
        top: game_area_height/2 - 50,
        position: 'absolute',
        height: '100px',
        width: '100px',
        background: 'green'
    });
    game_area.append(cel);
}
