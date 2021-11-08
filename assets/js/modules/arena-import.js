// const baseChannel = 'mk-g-residency-iw9twei4ix4';
const baseChannel = 'making-culture-hogrcmcbrn4';


/* CHANNEL FILTER */

function appendFilter( title, slug ){
	const list = document.getElementById('filter_list');
	// CREATE
	let li = document.createElement('li'); let checkbox = document.createElement('input'); let inputLabel = document.createElement('label');
	// ATTR
	checkbox.type = 'checkbox';
	checkbox.checked = true;
	checkbox.id = slug;
	checkbox.classList.add('filter_checkbox');
	checkbox.classList.add('channel_filter_checkbox');
	checkbox.setAttribute('onclick', 'filterToggle()');
	inputLabel.innerHTML = title;
	inputLabel.setAttribute('for', slug);
	inputLabel.classList.add('filter_label');
	// APPEND
	li.append(checkbox); li.append(inputLabel); list.append(li);
}

/* PAGE CONTROLLS */

/* SLIDER */
const sliderStyle = document.getElementById('sliderStyle');
const slider = document.getElementById('size_slider');
const placeholder = document.getElementById('placeholder');
slider.value = placeholder.clientWidth;
placeholder.remove();
slider.oninput = function(){
	sliderStyle.innerHTML = '.block:not(.expanded){width:'+slider.value+'px;height:'+slider.value+'px;font-size:'+(1/300*slider.value)+'em;}';
};

/* FILTER */
function toggleStyle(create, checkbox){
	const styleID = 'styleFor_'+checkbox.id;
	styleElement = document.getElementById(styleID);
	if(create && !styleElement){
		const style = document.createElement('style');
		style.innerHTML = '.'+checkbox.id+',.undefined{display:none;}';
		style.id = styleID;
		document.body.append(style);
	} else if(!create && styleElement) {
		styleElement.remove();
	}
}

const allFilter = document.getElementById("all");

function filterToggle(all){
	const channels = document.querySelectorAll('.channel_filter_checkbox');
	if( !all ){
		allFilterOverride = true;
		channels.forEach(checkbox => {
			if( !checkbox.checked ){
				allFilterOverride = false;
				toggleStyle(true, checkbox);
			} else {
				toggleStyle(false, checkbox);
			}
		});
		allFilter.checked = allFilterOverride;
	} else {
		channels.forEach(checkbox => {
			if( !allFilter.checked ){
				checkbox.checked = false;
				toggleStyle(true, checkbox);
			} else {
				checkbox.checked = true;
				toggleStyle(false, checkbox);
			}
		});
	}
}




/* CONSTRUCT FEED */

const feed = document.getElementById('channel_content');
let arena = new Arena();
arena.channel(baseChannel).contents({ page: 1, per: 100 })
.then(contents => {
	contents.map(content => {
		if(content.class === 'Channel'){
			appendFilter( content.title, content.slug );
			arena.channel(content.slug).contents({ page: 1, per: 100 })
			.then(childContents => {
				childContents.map(childContent => {
					writeBlock( feed, childContent, content.slug );
					//console.log(childContent);
				});
			})
			.catch(err => console.log(err));
		}else{
			writeBlock( feed, content, content.slug );
		}
		return content;
	});
})
.catch(err => console.log(err));




/* POP-UP */

function expand(id){
	article = document.getElementById(id);
	article.classList.toggle('expanded');
	if( viewImage = document.querySelector('#'+id+' .view_image') ){
		viewImage.src = viewImage.src == viewImage.dataset.thumbHref ? viewImage.dataset.originalHref : viewImage.dataset.thumbHref;
	}
	window.scrollTo(0, article.offsetTop - ( document.getElementById('controlls').offsetHeight + 20 ) );
}










