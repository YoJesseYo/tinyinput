let k1 = ['S/D', '.', '.', 'g', 'j', 'm', 'P', 'T', 'W'];
let k2 = ['SPA', 'ABC', '.', 'h', 'k', 'n', 'Q', 'U', 'X'];
let k3 = ['.', '.', 'DEF', 'i', 'l', 'o', 'R', 'V', 'Y'];
let k4 = ['DEL', 'a', 'd', 'GHI', '.', '.', 'p', 't','y'];
let k5 = ['.', 'b', 'e', '.', 'JKL', '.', 'q', 'u', 'z'];
let k6 = ['.', 'c', 'f', '.', '.', 'MNO', 'S', 'v', 'Z'];
let k7 = ['.', 'A', 'D', 'G', 'J', 'M','PQRS','.','x'];
let k8 = ['.', 'B', 'E', 'H', 'K', 'N', 'r', 'TUV', 'w'];
let k9 = ['.','C','F','I','L','O','s','.','WXYZ'];

let type = null;

let indicator = false;

$('button').on('touch mousedown',function(){
	if (!indicator){
	console.log("touchstart")
	switch(this.id){
		case 'k1':
			$('#k1').text(k1[0]);
			$('#k2').text(k2[0]);
			$('#k3').text(k3[0]);
			$('#k4').text(k4[0]);
			$('#k5').text(k5[0]);
			$('#k6').text(k6[0]);
			$('#k7').text(k7[0]);
			$('#k8').text(k8[0]);
			$('#k9').text(k9[0]);
			break;

		case 'k2':
			$('#k1').text(k1[1]);
			$('#k2').text(k2[1]);
			$('#k3').text(k3[1]);
			$('#k4').text(k4[1]);
			$('#k5').text(k5[1]);
			$('#k6').text(k6[1]);
			$('#k7').text(k7[1]);
			$('#k8').text(k8[1]);
			$('#k9').text(k9[1]);

			break;

		case 'k3':
			$('#k1').text(k1[2]);
			$('#k2').text(k2[2]);
			$('#k3').text(k3[2]);
			$('#k4').text(k4[2]);
			$('#k5').text(k5[2]);
			$('#k6').text(k6[2]);
			$('#k7').text(k7[2]);
			$('#k8').text(k8[2]);
			$('#k9').text(k9[2]);

			break;

		case 'k4':
			$('#k1').text(k1[3]);
			$('#k2').text(k2[3]);
			$('#k3').text(k3[3]);
			$('#k4').text(k4[3]);
			$('#k5').text(k5[3]);
			$('#k6').text(k6[3]);
			$('#k7').text(k7[3]);
			$('#k8').text(k8[3]);
			$('#k9').text(k9[3]);

			break;

		case 'k5':
			$('#k1').text(k1[4]);
			$('#k2').text(k2[4]);
			$('#k3').text(k3[4]);
			$('#k4').text(k4[4]);
			$('#k5').text(k5[4]);
			$('#k6').text(k6[4]);
			$('#k7').text(k7[4]);
			$('#k8').text(k8[4]);
			$('#k9').text(k9[4]);

			break;

		case 'k6':
			$('#k1').text(k1[5]);
			$('#k2').text(k2[5]);
			$('#k3').text(k3[5]);
			$('#k4').text(k4[5]);
			$('#k5').text(k5[5]);
			$('#k6').text(k6[5]);
			$('#k7').text(k7[5]);
			$('#k8').text(k8[5]);
			$('#k9').text(k9[5]);

			break;

		case 'k7':
			$('#k1').text(k1[6]);
			$('#k2').text(k2[6]);
			$('#k3').text(k3[6]);
			$('#k4').text(k4[6]);
			$('#k5').text(k5[6]);
			$('#k6').text(k6[6]);
			$('#k7').text(k7[6]);
			$('#k8').text(k8[6]);
			$('#k9').text(k9[6]);

			break;

		case 'k8':
			$('#k1').text(k1[7]);
			$('#k2').text(k2[7]);
			$('#k3').text(k3[7]);
			$('#k4').text(k4[7]);
			$('#k5').text(k5[7]);
			$('#k6').text(k6[7]);
			$('#k7').text(k7[7]);
			$('#k8').text(k8[7]);
			$('#k9').text(k9[7]);

			break;

		case 'k9':
			$('#k1').text(k1[8]);
			$('#k2').text(k2[8]);
			$('#k3').text(k3[8]);
			$('#k4').text(k4[8]);
			$('#k5').text(k5[8]);
			$('#k6').text(k6[8]);
			$('#k7').text(k7[8]);
			$('#k8').text(k8[8]);
			$('#k9').text(k9[8]);

			break;
	}
} else{
	console.log("mouseup")
	let temp = $(this).text();
	console.log(temp);
	if (temp == 'SPA') {
		type = ' ';
	}else if (temp == 'DEL'){
		type = 'DEL';
	}else if (temp == '.'){
		type = '';
	}else if (temp.length > 1){
		type = '';
	}else {
		type = temp;
	}
	console.log(type);
	let oldtext = $('textarea').text();
	let newtext = '';
	if (type == 'DEL'){
		newtext = oldtext.slice(0,-1);
	}else{
		newtext = oldtext + type;
	}

	$('textarea').text(newtext);

	$('#k1').text(k1[0]);
	$('#k2').text(k2[1]);
	$('#k3').text(k3[2]);
	$('#k4').text(k4[3]);
	$('#k5').text(k5[4]);
	$('#k6').text(k6[5]);
	$('#k7').text(k7[6]);
	$('#k8').text(k8[7]);
	$('#k9').text(k9[8]);
}
indicator = !indicator;
});
