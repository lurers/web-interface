var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  	var data = JSON.parse(this.response)
  	console.log(data.main.feels_like);
  	if (data.main.feels_like > 40) {
  		document.getElementById("temp").innerHTML = data.main.feels_like + "°C";
  		document.getElementById("temp").setAttribute("class","hot " + localStorage.lamp1);
  	}
  	else if (40 > data.main.feels_like > 20) {
  		document.getElementById("temp").innerHTML = data.main.feels_like + "°C";
  		document.getElementById("temp").setAttribute("class","warm " + localStorage.lamp1);
  	}
  	else {document.getElementById("temp").innerHTML = data.main.feels_like + "°C";
  		  document.getElementById("temp").setAttribute("class","cold " + localStorage.lamp1);
  	}
	}
};

xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Bishkek&units=metric&appid=fc4e22cd14d5ccf0d34945453dfcf9bf");
xhttp.send();

$.ajax({url: "https://api.exchangeratesapi.io/latest?base=RUB", success: function(result){
   $("#dollar").html(Math.round(1 / result.rates.USD));
}});


if (localStorage.username) {
	document.getElementById("username").innerHTML = localStorage.username;
}

if (localStorage.lamp1) {
	document.getElementById("lamp_text1").innerHTML = localStorage.lamp1;
	document.getElementById("lamp1").setAttribute("class","card " + localStorage.lamp1);
} else {
	localStorage.lamp1 = "off";
}

if (data.data.Media = null) {
   document.getElementById("anime").setAttribute("class", "card" + "[NULL ERROR. CLICK AGAIN]");
}

function change_name() {
	var name = prompt("Enter your name");
	if (name != null) {
		localStorage.username = name;
		document.getElementById("username").innerHTML = name;
	}
}

function on_off() {
	localStorage.lamp1 = (localStorage.lamp1 == "off")?"on":"off";
	document.getElementById("lamp_text1").innerHTML = localStorage.lamp1;
	document.getElementById("lamp1").setAttribute("class", "card " + localStorage.lamp1);
}

