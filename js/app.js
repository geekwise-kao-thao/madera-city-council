/**
 * Added small javascript code to easily assist CSS with media query.
 * 
 * When window screen size is changing, the container for title and name
 * will readjust its height to the height of the image for a cleaner look.
*/





document.addEventListener('DOMContentLoaded',function(event){
    
    var mayor_first_last_container = document.getElementById('mayor_first_last_container');
    var the_mayor_picture = document.getElementById('the_mayor_picture');
    
    window.addEventListener('resize',function(event){
       
        if(document.body.offsetWidth >= 513){
            mayor_first_last_container.style.height = the_mayor_picture.height + 'px';
        } else if(document.body.offsetWidth <= 512){
            mayor_first_last_container.style.height = 'auto';
        };
        
    });
    
    if(document.body.offsetWidth <= 512){
        mayor_first_last_container.style.height = 'auto';
    }
    
        window.addEventListener('scroll',function(event){
            
            var window_top = this.scrollY;
            
            var logo_element = document.getElementById('madera_label');
            var pedals = document.getElementById('pedals');
            var sparrow = document.getElementById('sparrow');
            
            logo_element.style.transform = 'translate(0px,' + window_top /6 + '%)';
            /*
            pedals.style.transform = 'translate(0px,' + window_top /5 + '%)';
            sparrow.style.transform = 'translate(0px,-' + window_top /35 + '%)';
            */
        });
    
});


