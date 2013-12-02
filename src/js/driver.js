(function() {
	if ( cookmarklet == null ) return;
    
    var c = cookmarklet;
         
    c.driver = {
        saveCookieHandler : function(event){
            var cookie = event.target;
            c.save(cookie.id, cookie.innerText, {target: "cookie"});
            c.driver.init();
            //make green then fade away
        },
        removeCookieHandler : function(event){
            var cookie = event.target;
            console.log("Removing "+ cookie.dataset.target);
            c.removeCookie(cookie.dataset.target);
            c.driver.init();
            console.log(document.cookie);
        },
        addEventHandler : function(elem,eventType,handler) {
         if (elem.addEventListener)
             elem.addEventListener (eventType,handler,false);
         else if (elem.attachEvent)
             elem.attachEvent ('on'+eventType,handler); 
        },
        init : function(){
            document.getElementById('cookies').innerHTML = c.renderCookies();
            var editable = document.getElementsByClassName('cookie');
            for(var i = 0; i < editable.length; i++){
                var cookie = editable[i].getElementsByClassName('value')[0];
                var removeButton = editable[i].getElementsByClassName('cookie-remove')[0];
                c.driver.addEventHandler(cookie, 'blur', c.driver.saveCookieHandler);
                c.driver.addEventHandler(removeButton, 'click', c.driver.removeCookieHandler);
            }
            console.log('init driver.');
        }
    };
    c.driver.init();
})();
