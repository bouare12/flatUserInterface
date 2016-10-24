jQuery(document).ready(function(){

  $(".soumenu").hide();

   $("a").click(function(){
    $(this).parent().next().slideToggle();

  });
});