
    function LoadCat() {
		var time=(Math.random()*4000) + 2000;
		document.body.style.background="#53C3EA";
		if (document.getElementById("snow")) {
            document.getElementById("snow").style.display = "none"
        }
        setTimeout(showPage, time);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        if (document.getElementById("snow")) {
            document.getElementById("snow").style.display = "block"
        }
        document.getElementById("myDiv").style.display = "block";
		document.body.style.background="";
    }

function IcicleFall(ElemID){
var num=document.getElementById(ElemID);

num.addEventListener("mouseover", function(){
	switch(ElemID){
		case "c1":
		document.getElementById("c1").style.animation =  "c1 1.7s ease forwards";
		break;
		case "c2":
		document.getElementById("c2").style.animation =  "c2 .7s ease-in forwards";
		break;
		case "c3":
		document.getElementById("c3").style.animation =  "c3 1.5s ease forwards";
		break;
		case "c4":
		document.getElementById("c4").style.animation =  "c4 1.7s ease-out forwards";
		break;
	}
});

};


function move(back, moveDistation, onOffMove) {//ф-ия для задержки движения кадра
    back.style.backgroundPosition = "0vw " + moveDistation + "vh";//обойдешься
}

function moveUp(back, time, cadrHeight, onOffMove) {
    moveDistation = cadrHeight;//проверка на начальное положение
    moveDistation = -moveDistation;//присваеваем отриц знач (для поднят вверх фона спрайта)
    move(back, moveDistation, onOffMove);
    moveDistation += moveDistation;//прибавл к - -, тоесть двигаем фон еще на 1 кадр

    setTimeout(move(back, moveDistation, onOffMove), time);
}


function moveDown(back, time, moveDistation, onOffMove) {
    moveDistation += moveDistation/(-2);//В итоге здесь снижение на 1 кадр (переход к кадру 2)
    move(back, moveDistation, onOffMove);
    moveDistation += Math.abs(moveDistation);//Снижение до начального положения (0)
    counter = 0;//Обнул счетчика, чтобы дальше он не прибавлял к отриц значению 0

    setTimeout(move(back, moveDistation, onOffMove), time);
}

function f( cadrHeight, ElemId) {
    var SlideHeight= 42;
    var moveDistation = 0;      //слеопок CardHeight
    var counter = 0;        //Определяет положение спрайта(конечное или началное)
    var back = document.getElementById(ElemId);//Записываем в переменную ИД
    var mus = document.getElementById('audio1');

    if (document.getElementById('teleport')||document.getElementById('btnNext')||document.getElementById('btnPrev')||
        document.getElementById('AP')||document.getElementById('aud')||document.getElementById('full_screen')||document.getElementById('fonOff')){
        if(back === aud ){
            mus.addEventListener('ended', function () {
                moveDown(back, 500, moveDistation);
            });
            mus.addEventListener('play', function () {
                moveUp(back, 500, cadrHeight);
            });
        }
        if ( back !== full_screen && back !== aud && back !== fonOff && back !== AP ) {
            back.addEventListener("mousedown", function () {
                moveUp(back, 500, cadrHeight);
            });
            back.addEventListener("mouseup", function () {
                moveDown(back, 500, moveDistation);
            });
        }
        else {
            back.addEventListener("click", function () {
                if(back === AP){
                    if (counter === 0) {
                            moveUp(back, 10, cadrHeight);
                            counter++;
                        }
                        else {
                            moveDown(back, 20, moveDistation);
                            counter = 0;
                        }
                }
                else {
                    if (counter === 0) {
                        moveUp(back, 10, cadrHeight);
                        counter++;
                    }
                    else {
                        moveDown(back, 20, moveDistation);
                        counter = 0;
                    }
                }
            });
        }
    }
    else{
        if ( back !== lightbtn) {
            back.addEventListener("mousedown", function () {
                moveUp(back, 500, cadrHeight);
            });
            back.addEventListener("mouseup", function () {
                moveDown(back, 500, moveDistation);
            });
        }
        else {
            back.addEventListener("click", function () {
                if (counter === 0) {
                    moveUp(back, 10, cadrHeight);
                    counter++;
                }
                else {
                    moveDown(back, 20, moveDistation);
                    counter = 0;
                }
            });
        }
    }

}

if (document.getElementById('backbtn')) {
    f(5.5, 'backbtn');
    f(6.5, 'greenbtn');
    f(6.5, 'bluebtn');
    f(6, 'lightbtn');
}
else {
    f(3.1, 'teleport');
    f(0, 'full_screen');
    f(2.79, 'btnNext');
    f(2.79, 'btnPrev');
    f(2.8, 'AP');
    f(3, 'aud');
    f(3, 'fonOff');
    IcicleFall("c1");
    IcicleFall("c2");
    IcicleFall("c3");
    IcicleFall("c4");
}

