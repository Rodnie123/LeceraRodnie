
	var one = document.getElementById("1");
	var two = document.getElementById("2");
	var three = document.getElementById("3");
	let photoshop = 60;
	let illustrator = 50;
	let canva = 40;
    one.style.strokeDashoffset = 'calc(440 - (440  *' + photoshop + ') /100)';
    two.style.strokeDashoffset = 'calc(440 - (440  *' + illustrator + ') /100)';
    three.style.strokeDashoffset = 'calc(440 - (440  *' + canva + ') /100)';
    document.getElementById("photoshop").innerHTML = photoshop + '%';
    document.getElementById("illustrator").innerHTML = illustrator + '%';
    document.getElementById("canva").innerHTML = canva + '%';

