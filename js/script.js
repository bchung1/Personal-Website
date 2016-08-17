$(document).ready(function(){ 

	$('#summarizer').hover(function(){
		$('.project-name').html("SUMMERy");
		$('#project-description').html("SUMMERy is a google chrome extension that summarizes online news articles. This was my submission for Capital One's Software Engineering Summit Challenge 2016. It was selected as one of the top 30 submissions.");
		$('.center-icon > a > i').show(); 
		$('.center-icon > a').attr('href','https://github.com/bchung1/Capital-One-Challenge');
	});

	$('#proximity-print').hover(function(){
		$('.project-name').html('Proximity Print');
		$('#project-description').html("Proximity Print is a printing service that will allow students to request to print from printers around them.");
		$('.center-icon > a > i').show(); 
		$('.center-icon > a').attr('href','https://github.com/WHSnyder/print');
	});

	$('#catalyst').hover(function(){
		$('.project-name').html('Catalyst');
		$('#project-description').html("Catalyst is a web app that helps young and naive college students (like myself) manage their financials."); 
		$('.center-icon > a > i').show(); 
		$('.center-icon > a').attr('href','https://github.com/k--chow/Catalyst');
	});

	$('#my-site').hover(function(){
		$('.project-name').html('My Website');
		$("#project-description").html("Description is self-explanatory. Check it out if you're interested!"); 
		$('.center-icon > a > i').show(); 
		$('.center-icon > a').attr('href','https://github.com/bchung1/Personal-Website');
	});

	$('#wiki-preview').hover(function(){ 
		$('.project-name').html('Wiki-Preview');
		$("#project-description").html("Wiki-Preview is a google chrome extension that gives you a preview of a wiki page as a tooltip. I made this extension because I was tired of opening dozens of wikipedia tabs :D"); 
		$('.center-icon > a > i').show(); 
		$('.center-icon > a').attr('href','https://github.com/bchung1/wiki-preview');
	}); 

	$('#wedj').hover(function(){ 
		$('.project-name').html('Wedj');
		$("#project-description").html("Wedj or \"We DJ\" is a web application that creates a collaborative music experience. It allows the public to decide what music they want to hear in a shared space be it a gym, starbucks, or a party."); 
		$('.center-icon > a > i').show(); 
		$('.center-icon > a').attr('href','https://github.com/bchung1/wedj');
	}); 

	$('.tbd-project').hover(function(){
		$('.project-name').html('New Project');
		$("#project-description").html("<div class='center-icon'><img src=img/qmark.svg></div>"); 
		$('.center-icon > a > i').hide(); 
	});

	$('#summarizer').click(function(){ 
		window.location = 'https://github.com/bchung1/Capital-One-Challenge';
	}); 

	$('#proximity-print').click(function(){ 
		window.location = 'https://github.com/WHSnyder/print';
	}); 

	$('#catalyst').click(function(){ 
		window.location = 'https://github.com/k--chow/Catalyst';
	}); 

	$('#my-site').click(function(){ 
		window.location = 'https://github.com/bchung1/Personal-Website';
	}); 

	$('#wiki-preview').click(function(){ 
		window.location = 'https://github.com/bchung1/wiki-preview';
	}); 

	$('#wedj').click(function(){ 
		window.location = 'https://github.com/bchung1/wedj';
	}); 

	$('#right-bracket').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){ 
		//$('#dance, #develop').addClass("underline-after"); 
		$('#chevron-arrow-container').html('<a id="chevron-arrow" class="text-center" href="#about"><i class="fa fa-chevron-down faa-float animated faa-fast" aria-hidden="true"></i></a>');
	});

 $("#bboy-clip").fitVids();

}); 