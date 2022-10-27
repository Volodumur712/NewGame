/*
1 Зробити переміщення кулі в кінець ігрового поля, після вильоту за межі поля 
повертати її на початок поля, на кшталт як я зробив приклад з ворогом. є

2 Зробити заборону на переміщення гравця за межі ігрового поля вгору та вниз. 
Щоб на кордонах він не смикався і не стрибав. 
Підказка – потрібно спочатку перевіряти позицію гравця, а потім виконувати рух
*/

audioplay = document.querySelector("audio");

// кнопка старт забирає блок старт і показує блок game
// варіант 1
/*
startBaton = document.querySelector("#start button");
blocGame = document.querySelector("#game");
startBaton.onclick = function() {
	blokStart = document.querySelector("#start");
	blokStart.style.display = "none";
	blocGame.style.display = "block";
}
*/

// варіант 2
startBaton = document.querySelector("#start button");
blokStart = document.querySelector("#start");
blocGame = document.querySelector("#game");
// виклик функції старт гри
startBaton.onclick = function() {
	startGame();
}

// вкл-викл картинку та музику
sound = "off"; // "on"

soundButton = document.querySelector("#sound img");
soundButton.onclick = function() {
	if (sound == "on") {
		soundButton.src = "images/mute_sound.png";
		sound = "off";
		audioplay.pause();
	} else {
		soundButton.src = "images/sound_on.png";
		sound = "on";
		audioplay.play();
	}
}
// рух гравця
gamer = document.querySelector("#player");

// упрвління кнопками вверх вниз
document.onkeydown = function moveGamer(event) {
	console.dir(event);
	// рух вверх
	if(event.keyCode == 87 || event.keyCode == 38) {
		if(gamer.offsetTop > 75) {
			gamer.style.top = gamer.offsetTop - 20 + "px";
		}
	}

	// вниз рух
	if(event.keyCode == 83 || event.keyCode == 40) {
		if(gamer.offsetTop <  440) {
			gamer.style.top = gamer.offsetTop + 20 + "px";
		}	
	}

	// вистріл пробелом
	probel = 32;
	if (event.keyCode == probel) {
		createBullet();
	}

}

// функція старт гри
function startGame() {
	blokStart.style.display = "none";
	blocGame.style.display = "block";

// енемі перший
	createEnemy1();

// другий
	createEnemy2();

// куля
	createBullet();
}


/* Робота з ворогами
 // Зробити створення кулі при натисканні на пробіл. 
 // Коли куля долітає до кінця поля, видаляти кулю і зупиняти таймер кулі.  є  */ 

// стартова позиція енемі
position1 = 100;
position2 = 400;

 // створення елементу
function createEnemy1() {
	let enemy = document.createElement("div");
	enemy.className = "enemy type-1";
	// зміна позиції наступного
	enemy.style.top = position1 + "px";
	position1 = position1 + 40;

	// розміщення енемі на екрані і щоб рухався
	blocGame.appendChild(enemy);
	moveEnemy1(enemy);
}

function createEnemy2() {
	let enemy = document.createElement("div");
	enemy.className = "enemy type-2";
	// зміна позиції наступного
	enemy.style.top = position2 + "px";
	position2 = position2 - 50;

	// розміщення енемі на екрані і щоб рухався
	blocGame.appendChild(enemy);
	moveEnemy2(enemy);
}
 
// рух енемі 1
function moveEnemy1(enemy) {
	//console.dir(enemy);
	let timerID = setInterval(function() {
		enemy.style.left = enemy.offsetLeft - 10 + "px";
		//console.dir(enemy.offsetLeft);
		if (enemy.offsetLeft < -100) {
			// якщо позиція менше 100 видаляємо ремувом
			enemy.remove();
			// і створюється новий
			createEnemy1();
			// зупинка інтервалу
			clearInterval(timerID);
		}
	}, 50);
}

// рух енемі 2
function moveEnemy2(enemy) {
	let timerID = setInterval(function() {
		enemy.style.left = enemy.offsetLeft - 8 + "px";
		if(enemy.offsetLeft < -100) {
			enemy.remove();
			createEnemy2();
			clearInterval(timerID);
		}
	}, 70);
}

// вистріл
// створення кулі
function createBullet() {
	let bullet1 = document.createElement("div");
	bullet1.className = "bullet";
	blocGame.appendChild(bullet1);
	moveBullet(bullet1);
}

// куля рух
function moveBullet(bullet) {
	//console.dir(bullet);
	let timerID = setInterval(function() {
		bullet.style.left = bullet.offsetLeft + 30 + "px";
		if(bullet.offsetLeft > 1500) {
			bullet.remove();
		}
	}, 30);
}