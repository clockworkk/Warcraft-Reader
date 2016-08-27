//Change the background Color of the posts to white.
[].forEach.call(document.getElementsByClassName('TopicPost-bodyContent'), function(v, i, a) {
	a[i].style.background = 'transparent';
	a[i].style.backgroundColor = '#ffffff';
	a[i].style.color = '#000000';
});

// Change the background Color of the blockquotes
[].forEach.call(document.getElementsByTagName('blockquote'), function(v, i, a) {
  a[i].style.backgroundColor = '#191919';
});