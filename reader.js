
//Change the background Color of the posts to white.
[].forEach.call(document.getElementsByClassName('topic-post'), function(v, i, a) {
	a[i].style.background = 'transparent';
	a[i].style.backgroundColor = '#ffffff';
	a[i].style.color = '#000000';
} );
