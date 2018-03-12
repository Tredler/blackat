function myFunction() {
    document.getElementById("im").style.animation = "bottle 10s ease forwards ";
    document.getElementById("datchik").style.animation = "spin 7s ease forwards";
    document.getElementById("lampa").style.animation = "lampa .3s 4s steps(3) infinite alternate";
    p = document.getElementById('Wow');
    setTimeout(function () {
        p.play();
    }, 4000);
	function newpage(){
		document.location.href = "indexSL.html"
	}
	setTimeout(newpage, 9400);
};
function contact(){
	function con(){
		document.location.href = "contacts.html"
	 }
	setTimeout(con, 700);
};
function Calling404(){
	function The404(){
		document.location.href = "404.html";
	}
	setTimeout(The404, 700);
};
function card(){
	document.getElementById("card").style.animation = "card 4s ease forwards";
	function c2(){
		document.getElementById("card").style.animation = "card2 4s ease forwards";
	}
	setTimeout(c2,6000);
}

function toProfile(ElemID){
var num=document.getElementById(ElemID);

num.addEventListener("click", function(){
	switch(ElemID){
		case "con1":
			document.location.href = "https://www.instagram.com/shalopay13/";
			break;
		case "con2":
			document.location.href = "https://www.facebook.com/profile.php?id=100005266788247";
			break;
		case "con3":
			document.location.href = "https://t.me/tredler";
			break;
		case "con4":
			document.location.href = "https://www.instagram.com/izmarahd/";
			break;
		case "con5":
			document.location.href = "https://vk.com/id197047820";
			break;
		case "con6":
			document.location.href = "https://www.instagram.com/pasha_polyakov/";
			break;
		case "con7":
			document.location.href = "https://vk.com/blackatart"
			break;
		case "con8":
			document.location.href = "index.html"
			break;
		case "con9":
			document.location.href = "https://www.instagram.com/blackatart/"
			break;
	}
});

};
toProfile("con1");
toProfile("con2");
toProfile("con3");
toProfile("con4");
toProfile("con5");
toProfile("con6");
toProfile("con7");
toProfile("con8");
toProfile("con9");