function to(angle, length) {
	if (angle < 0) {
		angle = 360 - ((angle * (-1)) % 360);
	}
	angle = angle % 360;
	if (length < 0) {
		length *= (-1);
	} else if (length == 0) {
		return [0,0];
	}
	if (angle % 90 === 0) {
		angle = angle / 90;
		if (angle == 0) {
			return [0,-length];
		} else if (angle == 1) {
			return [length,0];
		} else if (angle == 2) {
			return [0,length];
		}
		return [-length,0];
	}
	return [	Math.sin(angle * (Math.PI/180)) * length,
				Math.sin((angle-90) * (Math.PI/180)) * length	];
}

function line(start, angle, length, layer) {
	var z = false;
	if (typeof(start[2]) != "undefined") {
		angle += start[2];
		z = true;
	}
	var x2 = to(angle,length);
	var y2 = x2[1] + start[1];
	x2 = x2[0] + start[0];
	if (typeof(layer) != "undefined") {
		layer.moveTo(start[0],start[1]);
		layer.lineTo(x2,y2);
	}
	if (z === false) {
		return [x2,y2];
	} else {
		return [x2,y2,angle];
	}
}

function clear(layer) {
	layer.clearRect(0, 0, layer.canvas.width, layer.canvas.height);
}