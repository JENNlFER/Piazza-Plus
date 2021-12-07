var all = document.getElementsByTagName("*");
for (var i=0, max=all.length; i < max; i++) {
	var x=Math.round(0xffffff * Math.random()).toString(16);
	var y=(6-x.length);
	var z="000000";
	var z1 = z.substring(0,y);
	var color= "#" + z1 + x;
  all[i].style.background = color;
}

	