document.addEventListener('DOMContentLoaded',function(event){
    
    var mayor_first_last_container = document.getElementById('mayor_first_last_container');
    var the_mayor_picture = document.getElementById('the_mayor_picture');
    
    window.addEventListener('resize',function(event){
        console.log(the_mayor_picture.height);
        
        if(window.screen.width >= 530){
            mayor_first_last_container.style.height = the_mayor_picture.height + 'px';
        };
        
        if(window.screen.width <= 529){};
        
    });
    
});


