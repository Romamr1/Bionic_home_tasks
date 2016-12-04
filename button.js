(function(){

	var parent =  document.getElementsByClassName("parent");

	var box =  document.getElementsByClassName("box");


	parent[0].addEventListener('click', createEl);

	for (var i = box.length - 1; i >= 0; i--) {

		box[i].addEventListener('click', addBox);

	}

	function addBox(event) {
			parent[0].removeChild(event.target);
			event.stopPropagation();			
	};

	function createEl(event) {		
		
		var div = document.createElement('div');
		div.setAttribute('class',"box");
		div.addEventListener('click', addBox);

		parent[0].appendChild(div);
		     
	};

})();
