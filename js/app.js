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
    
    /* on scroll event handler */
    
    var menu_bar = document.getElementById('menu_bar');
    var hamburger_anchor = document.getElementById('hamburger_anchor');
    var title_icon_container = document.getElementById('title_icon_container');
    var city_of_madera_label = document.getElementById('city_of_madera_label');
    var madera_icon_container = document.getElementById('madera_icon_container');
    var temperature = document.getElementById('temperature');
    var second_menu_container = document.getElementById('second_menu_container');
    var residents_item = document.getElementById('residents_item');
    var visitors_item = document.getElementById('visitors_item');
    var business_item = document.getElementById('business_item');
    var government_item = document.getElementById('government_item');
    var hero_text_container = document.getElementById('hero_text_container');
    
    window.addEventListener('scroll',function(event){
        
        
        // testing out city of madera label hide feature
    
    var window_top = this.scrollY;
    console.log(window_top); /*272*/
    
    city_of_madera_label.style.backgroundColor = '#b585ce';
    madera_icon_container.style.backgroundColor = '#b585ce';
    city_of_madera_label.style.transform = 'translate(' + window_top /.7 + '%, 0px)';  
    madera_icon_container.style.paddingRight = '' + window_top/.15 + 'px' ;
    
    // end of tes for hide feature
        
        /*
        var window_top = this.scrollY;*/
        
        var menu_bar = document.getElementById('menu_bar');
        var light_seal = document.getElementById('light_seal');
        var bold_seal = document.getElementById('bold_seal');
        
        menu_bar.style.backgroundColor = '#b585ce';
        light_seal.style.display = 'none';
        bold_seal.style.display = 'inline-block';
        
        // menu bars height change
        
        console.log(hero_text_container.getBoundingClientRect().top)
    
        if(hero_text_container.getBoundingClientRect().top <= 192){
            menu_bar.style.height = '4.5rem';
            hamburger_anchor.style.top = '18px';
            title_icon_container.style.paddingLeft = '70px';
            madera_icon_container.style.width = '17%';
            temperature.style.top = '18px';
            residents_item.style.display = 'none';
            visitors_item.style.display = 'none';
            business_item.style.display = 'none';
            government_item.style.display = 'none';
            second_menu_container.style.height = '4.5rem';
            second_menu_container.style.top = '4.5rem';
        };
        
        if(hero_text_container.getBoundingClientRect().top > 192){
            menu_bar.style.height = '6rem';
            hamburger_anchor.style.top = '30px';
            title_icon_container.style.paddingLeft = '37px';
            madera_icon_container.style.width = '22%';
            temperature.style.top = '30px';
            residents_item.style.display = 'inline-block';
            visitors_item.style.display = 'inline-block';
            business_item.style.display = 'inline-block';
            government_item.style.display = 'inline-block';
            second_menu_container.style.height = '6rem';
            second_menu_container.style.top = '6rem';
        };
        
    });
    
    
    
    
    
    
    
});


