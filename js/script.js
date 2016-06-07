$(document).ready(function(){ 

	$('#summarizer').hover(function(){
		$('.project-name').html("SUMMERy");
		$('#project-description').html("SUMMERy is a google chrome extension that summarizes online news articles. This was my submission for Capital One's Software Engineering Summit Challenge 2016. It was selected as one of the top 30 submissions.");
		$('#project-description').css({'color':'#F28C38'});
		$('.center-icon > a > i').show(); 
		$('.center-icon > a').attr('href','https://github.com/bchung1/Capital-One-Challenge');
	});

	$('#proximity-print').hover(function(){
		$('.project-name').html('Proximity Print');
		$('#project-description').html("Proximity Print is a printing service that will allow students to request to print from printers around them.");
		$('#project-description').css({'color':'#069193'});
		$('.center-icon > a > i').show(); 
		$('.center-icon > a').attr('href','https://github.com/WHSnyder/print');
	});

	$('#catalyst').hover(function(){
		$('.project-name').html('Catalyst');
		$('#project-description').html("Catalyst is a web app that helps young and naive college students (like myself) manage their financials."); 
		$('#project-description').css({'color':'#BA002E'});
		$('.center-icon > a > i').show(); 
		$('.center-icon > a').attr('href','https://github.com/k--chow/Catalyst');
	});

	$('#my-site').hover(function(){
		$('.project-name').html('My Website');
		$("#project-description").html("Description is self-explanatory. Check it out if you're interested!"); 
		$('#project-description').css({'color':'#5B8DEA'});
		$('.center-icon > a > i').show(); 
		$('.center-icon > a').attr('href','https://github.com/bchung1/Personal-Website');
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


}); 