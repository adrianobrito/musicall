var go_to = function(link){
  location.href = link;
}

$(document).ready(function(){
  $(".with-bar").mouseover(function(){
    $(this).addClass('nav-over');
    this.innerHTML = '// ' + $(this).text();
  });

  $(".with-bar").mouseout(function(){
    $(this).removeClass('nav-over');
    $(this).text($(this).text().split('//')[1]);
  });
})
