$(document).ready(function(){
  $('.close-button').click(function(event){
    event.stopPropagation()
    CloseId = $(this).data('trigger');
    $(CloseId).removeClass('active');
    $('.background-fixer').removeClass('modal-active');
    $('.swap-paper').removeClass('disappear');
    $('.swap-paper').removeClass('active');
  });
  $('.cv-download-close').click(function(event){
    event.stopPropagation()
    $('.cv-download').addClass('collapsed');
  });
  $('.cv-download-elements').click(function(){
    $('.collapsed').removeClass('collapsed');
  });

  $('.modal-trigger').click(function(){
    sectionId = $(this).data('trigger');
    $('.modal').removeClass('active');
    $(sectionId).toggleClass('active');
    $('.background-fixer').addClass('modal-active');
  });

  $('.menu-trigger').click(function(){
    $('.navigation-content').toggleClass('active');
    $('.menu-trigger').toggleClass('active');
    $('.menu-background').fadeToggle('3000');
  });

  $('.menu-background').click(function(){
    $('.navigation-content').toggleClass('active');
    $('.menu-trigger').toggleClass('active');
    $('.menu-background').fadeToggle('3000');
  });

  $('.swap-paper').click(function() {
    $(this).removeClass('disappear');
    $('.swap-paper').removeClass('active');
    $(this).addClass('active');
    $('.swap-paper').not(this).each(function() {
        $(this).addClass('disappear');    
    });
});

});
