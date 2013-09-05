var allElem = document.getElementsByTagName("*");
for (var i = 0; i < allElem.length; i++)
{
	var e = allElem[i];
	
	e.style.color = "white";
	e.style.backgroundColor = "black";
	e.style.backgroundImage = "none";
}