$(".box1").click(function(){
  $(".box1over").show();
})

$(".box1over").click(function(e){
  e.stopPropagation();
  $(".box1over").hide();
})

$(".box2").click(function(){
  $(".box2over").show();
})

$(".box2over").click(function(e){
  e.stopPropagation();
  $(".box2over").hide();
})
