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
    
});


