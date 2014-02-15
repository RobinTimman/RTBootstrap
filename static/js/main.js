$("#testid").keyup(function(event){
	event.preventDefault();
	//console.log(_this);

	$("#llist span").unbind('click');
	var lsplit = '',
		split	= this.value.split(' ');
	for (var i = 0; i < split.length; i++) {
		console.log(split[i]);
		if(split[i].length > 0)	lsplit += '<span class="rts-gol">'+split[i]+'</span>';
	};
	$("#"+$(this).data('bindid')).html(lsplit);

	$("#llist span").bind('click', function(){
		console.log('hoi');
		$(this).remove();
	});
});

//console.log($('.codeprev').html());
/*
var allTags = $('#codeprev').find("*");
console.log(allTags);
for (var i = 0, len = allTags.length; i < len; i++) {
	console.log(allTags[i]);
	
	if(allTags[i].id) id = ' id="'+allTags[i].id+'"';
	if(allTags[i].className) classes = ' class="'+allTags[i].className+'"';
	if(allTags[i].dataset) console.log('dataset is not empty'); console.log(allTags[i].dataset);
	
	var nice	= '<'+allTags[i].localName+classes+id+'>'+allTags[i].innerText+'</'+allTags[i].localName+'>';
	console.log(nice)
    // allTags[i] is an element within the container object
    // allTags[i].id is the id of the element (if there is one)
}
*/

// createCodePrev("codeprev");
// function createCodePrev(id){
// 	var frag = document.createDocumentFragment(),
// 		tmp	= document.createElement('div');
// 	//$(tmp).addClass("rtc-blu");
// 	tmp.innerHTML('hoi');
// 	while (tmp.firstChild) {
//         frag.appendChild(tmp.firstChild);
//     }
// 	document.getElementsByClassName("codeprev").insertBefore(frag);
// 	//$(".codeprev").text("<htm>HalloM</hallo>");
// }