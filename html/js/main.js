$(document).ready(function(){
	objectFitImages();
	load = function(){
		$.getJSON( "projects.json").done(function( data ) 
		{
			var projectTemplate = $('#projectTemplate').html();
			Mustache.parse(projectTemplate);
			console.log("done", projectTemplate);
			$.each( data.project_tiles, function( i, project ) {
				//$( "<li><img>" ).attr( "src", project.poster ).appendTo( "#tiles" );
				
				var rendered = Mustache.render(projectTemplate, {project: project});
  				$('#tiles').append(rendered);
				


				// if ( i === 2 ) {
				// 	return false;
				// }
			});
			$('#tiles').append('<li class="fill"></li>');
			$('#tiles').append('<li class="fill"></li>');
			$('#tiles').append('<li class="fill"></li>');
		});
		  /*
		  $.each( data, function( key, val ) {
		    items.push( "<li id='" + key + "'>" + val + "</li>" );
		  });
		 
		  $( "<ul/>", {
		    "class": "my-new-list",
		    html: items.join( "" )
		  }).appendTo( "body" );
		});
		*/
	}
	load();
});
