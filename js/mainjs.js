$(document).ready(function (){
		$(document).on('mousedown',dragstart);

	});

	function dragstart(e){
		e.preventDefault();
		mousepos = e.screenY;
		$(document).on('mousemove',drag);
		$(document).on('mouseup',dragstop);
	}
	function drag(e){
		delta = mousepos - e.screenY;
		to = setTimeout(function(){
			$(document).scrollTop($(document).scrollTop()+delta);

		},1);
		mousepos = e.screenY;
	}

	function dragstop(e)	{
		$(document).off('mousemove mouseup mouseout');
	}
















