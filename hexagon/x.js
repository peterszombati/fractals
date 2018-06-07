function ready() {

function hexa(x,length,layer,i,max) {
	if(i<=0) {
		return;
	}
	i-=1;
	for (var d = 0; d < 6; d++) {
		if ((i+1) != max && (d == 5 || d==0)) {
			x = line(x,60,length);
		} else {
			x = line(x,60,length,layer);
		}
		hexa(x,length/3,layer,i,max);
	}
}

function test(layer, color) {
	layer.beginPath();
	layer.strokeStyle = color;
	var w = layer.canvas.width;
	var h = layer.canvas.height;

	hexa([w/4,10,30],w/2,layer,5,5);
	layer.stroke();
}

test(document.getElementById('layer').getContext('2d'), '#000');
};