class Block { 
	constructor( block, slug ) {
				
		const date = new Date(block.connected_at);
		//const date = new Date(block.created_at);
		//const date = new Date(block.updated_at);
		const order = Math.round( date.getTime() / 1000 );
			
			
		// ARTICLE
		let article = document.createElement('article');		
		article.id = 'block_'+block.id;
		article.classList.add( 'block', 'type_'+block.class, slug );
		article.style.order = -order;

		
		// VIEW
		let view = document.createElement('div');
		view.classList.add( 'view' );
		
		
		// ENLARGE BUTTON
		let sizeButton = document.createElement('div');
		sizeButton.classList.add( 'size_button' );
		sizeButton.setAttribute( 'onclick', 'expand("block_'+block.id+'")' );
		article.append( sizeButton );
		
		// CONTENT
		let content = document.createElement('div');
		content.classList.add( 'article_content' );
		
		// TITLE
		if( block.title != '' ){
			let title = document.createElement('h2');
			title.innerHTML = block.title;
			title.classList.add( 'article_title' );
			content.append( title );
		}
		
		
		// VIEW IMAGE
		function createViewIMG( thumb, original ){
			let viewIMG = document.createElement('img');
			viewIMG.src = thumb;
			viewIMG.dataset.thumbHref = thumb;
			viewIMG.dataset.originalHref = original;
			viewIMG.classList.add( 'view_image' );
			return viewIMG;
		}
		
		// SOURCE URL
		function createSourceURL( href ){
			let sourceURLWrapper = document.createElement('div');
			sourceURLWrapper.classList.add( 'article_source_wrapper' );
			let sourceURL = document.createElement('a');
			sourceURL.innerHTML = block.source.url;
			sourceURL.href = block.source.url;
			sourceURL.setAttribute('target', '_blank');
			sourceURLWrapper.append( sourceURL );
			return sourceURLWrapper;
		}
		
		switch(block.class) {
			
			case 'Image':
				view.append( createViewIMG( block.image.thumb.url, block.image.original.url ) );
				article.dataset.arenaLink = 'https://www.are.na/block/'+block.id;
				break;
				
			case 'Channel':
				article.dataset.arenaLink = 'https://www.are.na/channel/'+block.slug;
				var view_inner = document.createElement('div');
				view_inner.classList.add( 'view_inner' );
				let channelTitle = document.createElement('h2');
				channelTitle.classList.add( 'channel_title' );
				channelTitle.innerHTML = block.title;
				let channelInfo = document.createElement('span');
				channelInfo.innerHTML = '<a href="'+article.dataset.arenaLink+'">Are.na channel with '+block.length+' blocks</a>';
				view_inner.append( channelTitle );
				view_inner.append( channelInfo );
				view.append( view_inner );
				break;
				
			case 'Link':
				view.append( createViewIMG( block.image.thumb.url, block.image.original.url ) );
				article.dataset.arenaLink = 'https://www.are.na/block/'+block.id;
				var sourceUrlElem = createSourceURL( block.source.url );
				break;
				
			case 'Media':
				article.dataset.arenaLink = 'https://www.are.na/block/'+block.id;
				view.append( createViewIMG( block.image.thumb.url, '' ) );
				article.dataset.arenaLink = 'https://www.are.na/block/'+block.id;
				var view_inner = document.createElement('div');
				view_inner.innerHTML = block.embed.html;
				view.append( view_inner );
				break;
				
				
				
				break;
				
			case 'Attachment':
				view.append( createViewIMG( block.image.thumb.url, block.image.original.url ) );
				article.dataset.arenaLink = 'https://www.are.na/block/'+block.id;
				var sourceUrlElem = createSourceURL( block.source.url );
				break;
				
			default:
				var view_inner = document.createElement('div');
				view_inner.classList.add( 'view_inner' );
				view_inner.innerHTML = block.content_html;
				view.append( view_inner );
				article.dataset.arenaLink = 'https://www.are.na/block/'+block.id;
		}
		
		
		
		// DESCIPTION
		if( block.description_html && block.description_html != '' ){
			let description = document.createElement('div');
			description.classList.add( 'article_description' );
			description.innerHTML = block.description_html;
			content.append( description );
		}
	
		
		
		// AUTHOR & DATE
		let infoWrapper = document.createElement('div');
		let info = document.createElement('span');
		info.innerHTML = date.getDate() +'.'+ date.getMonth().toString().padStart(2, '0') +'.'+ (date.getYear()+1900) +'&mdash;'+  date.getHours() +':'+ date.getMinutes().toString().padStart(2, '0') +':'+ date.getSeconds().toString().padStart(2, '0') +' / '+ block.connected_by_username;
		infoWrapper.classList.add( 'article_info' );
		// ARE.NA LINK
		let arenaLink = document.createElement('a');
		arenaLink.href = article.dataset.arenaLink;
		arenaLink.innerHTML = 'Open in Are.na';
		arenaLink.classList.add( 'article_arena_link' );
		arenaLink.setAttribute('target', '_blank');
		infoWrapper.append( info );
		infoWrapper.append( arenaLink );
		content.append( infoWrapper );
		
		
		
		// SOURCE LINK
		if( sourceUrlElem ){ content.append( sourceUrlElem ); }
		
		article.append( view );
		article.append( content );

		this.article = article;		
	}
}
	
function writeBlock( element, block, slug ) {
	element.append( new Block( block, slug ).article );
}