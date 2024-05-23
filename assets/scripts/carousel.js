
window.onload = ()=>{
	
	Array.from(document.getElementsByClassName('carousel')).forEach(element=>{
		
		updateCarousel(element,0);
		
	})	
}

function updateCarousel(element, n){
	
	element.dataset.position=n;
	
	Array.from(element.children).forEach((child, i)=>{
		if(n<i){
			child.classList.add("next");
			child.classList.remove("current");
			child.classList.remove("prev");
		}
		else if(n==i){
			child.classList.add("current");
			child.classList.remove("prev");
			child.classList.remove("next");
		}
		else{
			child.classList.add("prev");
			child.classList.remove("next");
			child.classList.remove("current");
		}
	});
	
}

function shiftCarousel(element, n){
	
	let l = element.children.length;
	let i = +element.dataset.position;
	
	updateCarousel(element, (l+i+n)%l);
	
}