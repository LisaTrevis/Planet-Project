var planetArray = [
	{
	name: "mercury",
	img: "img/mercury.png",
	info: "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 88 days is the shortest of all the planets in the Solar System."
	},
	{
	name: "venus",
	img: "img/venus.png",
	info: "Venus is the second planet from the Sun. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets."
	},
	{
	name: "earth",
	img: "img/earth.png",
	info: "Earth is the third planet from the Sun and the only object in the Universe known to harbor life. It is the densest planet in the Solar System and the largest of the four terrestrial planets."
	},
	{
	name: "mars",
	img: "img/mars.png",
	info: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. It is called the Red Planet because the iron oxide on its surface gives it a reddish appearance."
	},
	{
	name: "jupiter",
	img: "img/jupiter.png",
	info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass two and a half times that of all the other planets in the Solar System combined."
	},
	{
	name: "saturn",
	img: "img/saturn.png",
	info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth."
	},
	{
	name: "uranus",
	img: "img/uranus.png",
	info: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Scientists often classify Uranus as an ice giant."
	},
	{
	name: "neptune",
	img: "img/neptune.png",
	info: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. It is the fourth-largest planet by diameter and the densest giant planet."
	}
]


function planetFinder() {
	var planetEntry = document.getElementById("input").value
	var planetName = planetEntry.toLowerCase()

	for(i = 0; i < planetArray.length; i++) {
		if(planetName == planetArray[i].name) {
			document.getElementById("description").textContent = planetArray[i].info
			document.getElementById("image").src = planetArray[i].img
			document.getElementById("input").value = '';
			return
		}
	} 	alert("That's not a planet!")
		document.getElementById("input").value = '';
};