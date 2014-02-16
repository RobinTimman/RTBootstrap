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


/*
 *	RTHighlight (JS)
 *	v0.0.1
 *	syntax hightligher (simplified)
 *	© 2014, Robin Timman
 */
function RTHighlight(options){
	var hlel			=  'RTCode';
	var elements, allTags;

	var sc				= {
							el: 		'RTH-el',
							attr: 		'RTH-a',
							atxt: 		'RTH-at',
							text: 		'RTH-txt',
						};

	//var allTags = $('#codeprev').find("*");
	//var allTags = document.getElementsByClassName('RTCode').getElementsByTagName('*');
	//var allTags = document.querySelectorAll('*.RTCode');
	el = document.getElementsByClassName('RTCode');
	//console.log('r: '+elements.length);
	var a,b,c,d,e,f,g,h,i,y,z,
		content = '';
	for(a=0; a < el.length; a++){

		if(el[a].children.length > 0){
			e = el[a];
			//console.log(el[a].children.length);
			for (b=0; b<e.children.length; b++) {
				f = e.children[b];

				//console.log('element geopend');
				//console.log(elementToHtml(f));
				content	+= elementToHtml(f);
				//console.log('    '+f.innerHTML);
				if(f.children.length > 0){
					for(c=0; c<f.children.length; c++){
					g = f.children[c];
					//console.log('    element geopend');
					//console.log(elementToHtml(g));
					content	+= '<br>'+rep('<tb></tb>', 1)+elementToHtml(g);
					//console.log('    '+g.innerText);
						if(g.children.length > 0){
							for(d=0; d<g.children.length; d++){
							h = g.children[d];
							//console.log('        element geopend');
							//console.log(rep('<tb></tb>', 2)+elementToHtml(h));
							content	+= '<br>'+rep('<tb></tb>', 2)+elementToHtml(h);
							//console.log(h.localName);
								if(h.children.length > 0){
									for(z=0; z<h.children.length; z++){
									i = h.children[z];
									//console.log('            element geopend');
									//console.log(rep('<tb></tb>', 3)+elementToHtml(i));
									content	+= '<br>'+rep('<tb></tb>', 3)+elementToHtml(i);

										if(i.children.length > 0){
											for(y=0; y<i.children.length; y++){
											j = z.children[y];
											//console.log('            element geopend');
											content	+= '<br>'+rep('<tb></tb>', 3)+elementToHtml(j);



											//console.log('            element gesloten' );
											content	+= '<br>'+rep('<tb></tb>', 3)+elementToHtmlClose(i);
											}
										} else {
											content	+= '<br>'+rep('<tb></tb>', 4)+i.innerText;
										}

									//console.log('            element gesloten' );
									content	+= '<br>'+rep('<tb></tb>', 3)+elementToHtmlClose(i);
									}
								} else {
									content	+= '<br>'+rep('<tb></tb>', 3)+h.innerText;
								}
							//console.log('        element gesloten' );
							content	+= '<br>'+rep('<tb></tb>', 2)+elementToHtmlClose(h);
							}
						} else {
							content	+= '<br>'+rep('<tb></tb>', 2)+g.innerText;
						}

					//console.log('    element gesloten');
					content	+= '<br>'+rep('<tb></tb>', 1)+elementToHtmlClose(g);
					}
				} else {
					content	+= '<br>'+f.innerText;
				}

				//console.log('element gesloten');
				content	+= '<br>'+elementToHtmlClose(f);
			};

		} else {
			//console.log('RTCode heeft geen elementen binnen in.');
		}
		$(el).after( '<div class="btn-toolbar"><h4>Voorbeeld:</h4><div class="btn-group">'+$(el).html()+'</div></div>' );
		$(el[a]).html( content );
	}
/*



	for (var a = 0; a < elements.length; a++) {
		//loop(elements[a], a);
		//console.log('</'+elements[a]+'>');
		if(elements[a].children.length > 0){

			console.log('deze code preview heeft kinderen');
			var prev 		= elements[a].children;
			for (var b = 0; b < prev.length; b++) {
				console.log('<'+prev[b].className+'>');
				loop(prev[b], b);
				console.log('</'+prev[b].className+'>');
			};
		}
		console.log('</'+elements[a].children[0].className+'>');
	}*/
	function elementToHtml(el){
		var content = '';
		content						+= spanTag('RTH-el', '&lt;'+el.localName);
		if(el.className) content	+= ' '+spanTag('RTH-a', 'class=')+spanTag('RTH-at', '"'+el.className+'"');
		if(el.id) content			+= ' '+spanTag('RTH-a', 'id=')+spanTag('RTH-at', '"'+el.id+'"');
		if(el.dataset){
			for (var x in el.dataset) {
				if(x != 'rtt') content += ' '+spanTag('RTH-a', 'data-'+x+'=')+spanTag('RTH-at', '"'+el.dataset[x]+'"')
			};/*
			for (var l = 0; l < el.dataset; l++) {
				if(el.dataset.rth){
					console.log(el.dataset);
					console.log('hoi :)');
					content				+= ' '+spanTag('RTH-a', 'data-'+el.dataset[i]+'=')+spanTag('RTH-at', '"'+el.dataset[i]+'"');
				}
			};*/
		}
		if(el.style[0]){
			content					+= ' '+spanTag('RTH-a', 'style=');
			var style = '', stylelist = [];
			for (var l = 0; l < el.style.length; l++) {
				style 				+= el.style[l]+': '+el.style[el.style[l]]+';';
			}
			content					+= spanTag('RTH-at', '"'+style+'"');
		}
		content						+= spanTag('RTH-el', '&gt;');
		return content;
	}
	function elementToHtmlClose(el){
		var content = '';
		content		+= '<span class="RTH-el">'+'&lt;/'+el.localName+'&gt;'+'</span>';
		return content;
	}
	function rep(string, n){
		var content = '';for (var i = 0; i < n; i++) { content += string; };
		return content;
	}
	function loop(el, index){
		if(el.children.length > 0){
			//console.log(element.children);
			for (var c = 0; c < el.children.length; c++) {
				console.log('<'+el.children[c].className+'>');
				loop(el.children[c], c);
				console.log('</'+el.children[c].className+'>');
			}
		} else {
			console.log('</'+el.className+'>');
		}
	}

	function fiel(element, index){
			var els 		= element;
			for(var i = 0; i < els.length; i++){
				console.log('<open>');
				console.log(els[i].children);
				fiel(els[i].children);
			}
	}
	function hasChilds(element){
		return element.children.length;
	}
	function spanTag(cn, txt) {
		return '<span class="'+cn+'">'+txt+'</span>';
	}
	function spanTagO(cn, txt){
		return '<span class="'+cn+'">';
	}
	function spanTagC(cn, txt){
		return '<span class="'+cn+'">'+'&lt;/'+txt+'&gt;'+'</span>';
	}
	function htmlencode(str) {
	    return str.replace(/[ &<>"']/g, function($0) {
	    //return str.replace(/\t/g, function($0) {
	        return "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39"}[$0] + ";";
	    });
	}
}
window.RTH = new RTHighlight({
	element: 'replaceRTH'
});