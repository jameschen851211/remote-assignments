function ajax(src, callback) {
    
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {

		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				callback(xhr.responseText);
			}
			else {
				alert("error status");
			}
		} 
	};
	xhr.open("GET", src);
	xhr.send();
}

function render(data) {
    // your code here.
    // document.createElement() and appendChild() are preferred. No innerHTML or 
    // something alike
	const p = document.createElement("p");
	const textnode = document.createTextNode(data);
	p.appendChild(textnode);
	document.querySelector(".div1").appendChild(p);
}

ajax(" https://appworks-school.github.io/Remote-Aassigiment-Data/products",function (response) {

render(response);

});
    
ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products", function(response) {

render(response);

}); // you should get product information in JSON format and render data in the page