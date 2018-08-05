function httpGet(theUrl)
{
	var xmlHttp = null;

	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", theUrl, false );
	xmlHttp.send( null );
	return xmlHttp.responseText;
}

var mainContainer = document.querySelector(".cryptocurrency-rates-widget"); //контейнер - <ul class="cryptocurrency-rates-widget">

for (var i = 0; i < crypt_multi_num_cur; ++i){
	n1 = eval("crypt_base_cur_" + i);	//название валюты
	
	var li = document.createElement("li");	//создаем <li> и вкладываем его в <ul class="cryptocurrency-rates-widget">
	mainContainer.appendChild(li);
	if(i>2){
		li.classList.add("mobile-hidden");
	}

	var article = document.createElement("article");	//создаем <article class="cryptocurrency-rate">
	li.appendChild(article);
	article.classList.add("cryptocurrency-rate");

	var output = document.createElement("output");	// создаем <output class="cryptocurrency-output">, непосредственно в него кладем картинки и значения валюты
	article.appendChild(output);
	output.classList.add("cryptocurrency-output");

	var img = document.createElement("img");	//создаем картинку с иконкой валюты
	output.appendChild(img);

	var src = "img/" + n1 + ".png";
	img.setAttribute("src",src);
	img.setAttribute("alt",n1);
	img.setAttribute("title",n1);
	img.classList.add("cryptocurrency-icon");
	
	var span = document.createElement("span");	//создаем <span class="cryptocurrency-value">, в этом спане будет текс с курсом валюты
	output.appendChild(span);
	span.classList.add("cryptocurrency-value");

	var imgArrow = document.createElement("img");	//создаем img с красной или зеленой стрелкой, в зависимости от изменения курса
	output.appendChild(imgArrow);
	imgArrow.classList.add("cryptocurrency-course-dir");
}

var li_list = mainContainer.querySelectorAll("li");

window.onload = function(){
	/*обновление курса валют каждые 30сек*/
	(function(){
		for (var i = 0; i < crypt_multi_num_cur; ++i) {
			n1 = eval("crypt_base_cur_" + i);	//название валюты
			n2 = eval("crypt_target_cur_" + i);	//всегда доллар

			getPar = eval('(' + httpGet("https://api.cryptonator.com/api/ticker/" +
				n1+"-"+n2) + ')');

			if (getPar.success != false) {
				var li = li_list[i];	//находим нужный li

				if (getPar.ticker.price > 0.009)
					price = Math.round(getPar.ticker.price * 100) / 100;
				else
					price = Math.round(getPar.ticker.price * 100000) / 100000;

				var output = li.querySelector(".cryptocurrency-output");	// находим <output class="cryptocurrency-output">, непосредственно в него кладем картинки и значения валюты

				var span = output.querySelector(".cryptocurrency-value");	//находим <span class="cryptocurrency-value">, в этом спане - текс с курсом валюты
				span.innerHTML = "$" + price;

				var imgArrow = output.querySelector(".cryptocurrency-course-dir");	//находим img-стрелку и присваиваем нужные атрибуты в зависимости от изменения валюты

				if (getPar.ticker.change >= 1){
					imgArrow.setAttribute("src","img/arrow-up.svg");
					imgArrow.setAttribute("alt","курс вырос");
					imgArrow.setAttribute("title","курс вырос");
				}
				else{
					imgArrow.setAttribute("src","img/arrow-down.svg");
					imgArrow.setAttribute("alt","курс упал");
					imgArrow.setAttribute("title","курс упал");
				}
			}
		}
		
		
		window.setTimeout(arguments.callee, 1000*30);	//обновляем инфу каждые 30сек
	})();
	
	/*обновление времени каждые 30сек*/

	(function(){
		var date = new Date(),
			time_tag = document.querySelector('.current-datetime-text'),
			attrdate = date.getDate(),
			month_name = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"),
			day_name = new Array("воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"),
			week_day = ', <span class="visible-lg-only">'+day_name[date.getDay()]+', </span>',
			hour = date.getHours(),
			minutes = date.getMinutes();
		if(hour<10)
			hour="0"+hour;
		if(minutes<10)
			minutes="0"+minutes;
		if(attrdate<10)
			attrdate="0"+attrdate;
		time_tag.setAttribute("datetime",date.getFullYear()+'-'+(date.getMonth()+1)+'-'+attrdate+'T'+hour+':'+minutes);
		time_tag.innerHTML = date.getDate()+' '+month_name[date.getMonth()]+' '+date.getFullYear()+week_day+hour+':'+minutes;
		window.setTimeout(arguments.callee, 1000*30);
	})();
};