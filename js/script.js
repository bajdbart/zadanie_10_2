//color Span
$('span:even').css('color','red');
// add Buttons
var paragraphs = $('p');
paragraphs.each(function(index, element) {
  var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
  $(element).append(button);
});
// onClick on Buttons
$("button").click(function(){
	alert($(this).attr("data-tmp"));
});
