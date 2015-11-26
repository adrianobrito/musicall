var go_to = function(link){
  location.href = link;
}

$(document).ready(function(){
  $(".with-bar").mouseover(function(){
    console.log("entrou");
    this.innerHTML = '// ' + $(this).text();
  });

  $(".with-bar").mouseout(function(){
    console.log("saiu");
    $(this).text($(this).text().split('//')[1]);
  });  
})
