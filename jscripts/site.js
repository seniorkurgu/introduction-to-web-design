function ClearForm(){
    document.getElementById('contactForm').reset();
}
$('#jqueryBtn').click(function(){
    $('p').hide();
})
$(function(){
    var pages = ['index','about','contact'];
    var pathname = window.location.pathname;
    $('.nav-link').each(function(item){
        if(pathname.includes(pages[item])){
            $(this).addClass('active');
            $(this).attr('aria-current','page');
        }
    })
});