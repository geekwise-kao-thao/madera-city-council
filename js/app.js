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
    
    /* Very tachy, will have to redo, toooooo tooooo DRY!!!!!!!!! */
    
    var main_menu_item_1 = document.getElementById('main_menu_item_1');
    var main_menu_item_2 = document.getElementById('main_menu_item_2');
    var main_menu_item_3 = document.getElementById('main_menu_item_3');
    var main_menu_item_4 = document.getElementById('main_menu_item_4');
    
    var fontawesome_1 = document.getElementById('fontawesome_1');
    var fontawesome_2 = document.getElementById('fontawesome_2');
    var fontawesome_3 = document.getElementById('fontawesome_3');
    var fontawesome_4 = document.getElementById('fontawesome_4');
    
    
    
    main_menu_item_1.addEventListener('mouseover',function(event) {
        fontawesome_1.style.color = '#000000';
        document.getElementById('residents_anchor').style.color = '#000000';
    })
    
    main_menu_item_1.addEventListener('mouseout',function(event){
        fontawesome_1.style.color = '#666666';
        document.getElementById('residents_anchor').style.color = '#666666';
    });
    
    main_menu_item_2.addEventListener('mouseover',function(event) {
        fontawesome_2.style.color = '#000000';
        document.getElementById('visitors_anchor').style.color = '#000000';
    })
    
    main_menu_item_2.addEventListener('mouseout',function(event){
        fontawesome_2.style.color = '#666666';
        document.getElementById('visitors_anchor').style.color = '#666666';
    });
    
    main_menu_item_3.addEventListener('mouseover',function(event) {
        fontawesome_3.style.color = '#000000';
        document.getElementById('business_anchor').style.color = '#000000';
    })
    
    main_menu_item_3.addEventListener('mouseout',function(event){
        fontawesome_3.style.color = '#666666';
        document.getElementById('business_anchor').style.color = '#666666';
    });
    
    main_menu_item_4.addEventListener('mouseover',function(event) {
        fontawesome_4.style.color = '#000000';
        document.getElementById('government_anchor').style.color = '#000000';
    })
    
    main_menu_item_4.addEventListener('mouseout',function(event){
        fontawesome_4.style.color = '#666666';
        document.getElementById('government_anchor').style.color = '#666666';
    });
    
    
    
    
    
});


