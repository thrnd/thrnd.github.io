/*article list clipping*/

if(containerWidth>767)
	clipArticles();

function clipArticles(){
	var artItem=document.querySelectorAll(".article-feed-desc-text,.video-desc"),
		maxheight=parseInt(getComputedStyle(document.querySelector(".article-feed-desc,.video-preview-desc")).height),
		head,
		headheight,
		linkhead,
		lheadheight,
		h3,
		parag,
		currentheight,
		strneeded,
		paragheight,
		heightval;

	for(var i=0;i<artItem.length;i++){
		item=artItem[i],
		head=item.querySelector(".article-info-header"),
		headheight=getheight(head),
		linkhead=item.querySelector("a.header-link"),
		lheadheight=getheight(linkhead),
		parag=item.querySelector(".article-short-desc,.video-short-desc"),
		paragheight=getheight(parag),
		currentheight=headheight+lheadheight+(paragheight?paragheight:0);

		if(currentheight>maxheight){
			if((strneeded=cutlines(parag,maxheight,currentheight))==0){
				//если функция вернула 0, значит, параграф полностью не влезает
				//в таком случае, обрезаем заголовок
				currentheight=headheight+lheadheight;
				if(currentheight>maxheight){
					strneeded=cutheader(linkhead,maxheight,currentheight);
					h3=linkhead.querySelector("h3.article-header");
					h3.classList.add("clipped");
					heightval=(strneeded*parseInt(getComputedStyle(h3).lineHeight))+"px";
					h3.style.minHeight=heightval;
					h3.style.height=heightval;
				}
			}
			else{
				parag.classList.add("clipped");
				heightval=(strneeded*parseInt(getComputedStyle(parag).lineHeight))+"px";
				parag.style.minHeight=heightval;
				parag.style.height=heightval;
			}
		}
	}
}

//фунцкия считает кол-во строк текста в элементе
function countlines(el){
	css=getComputedStyle(el);
	return (parseInt(css.height)/parseInt(css.lineHeight));
}

//фунцкия возвращает кол-во строк, которые нужно оставить, чтобы параграф влез в высоту блока
function cutlines(el,max,cur){
	var elheight=getheight(el);
	if((cur-elheight)>max){
		el.style.display="none";
		return 0;
	}
	var lc=countlines(el),
		lh=parseInt(getComputedStyle(el).lineHeight),
		notend=1,
		i=0;
	for(;notend && i<lc;i++)
		if((cur-i*lh)<=max)
			notend=0;
	i--;
		
	if(notend){
		el.style.display="none";
		return 0;
	}
	
	return lc-i;
}

//фунцкия возвращает кол-во строк, которые нужно оставить, чтобы заголовок влез в высоту блока
function cutheader(el,max,cur){
	var elheight=getheight(el),
		h3=el.querySelector("h3.article-header"),
		lc=countlines(h3),
		lh=parseInt(getComputedStyle(h3).lineHeight),
		notend=1,
		i=0;
	for(;notend && i<lc;i++)
		if((cur-i*lh)<=max)
			notend=0;
	i--;
	
	return lc-i;
}

//функция возвращает высоту элемента (с учетом вертикальных маргинов)
function getheight(elm){
	css=getComputedStyle(elm);
	sum = parseInt(css.height)+parseInt(css.marginTop)+parseInt(css.marginBottom);
	return sum;
}