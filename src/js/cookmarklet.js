var cookmarklet = cookmarklet || (function() {
    var c = {
        getCookie : function(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        },
        setCookie : function(name,value,days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else var expires = "";
            document.cookie = name+"="+value+expires+"; path=/";
        },
        removeCookie : function(name) {
            this.setCookie(name,"",-1);
        },
        renderCookies : function(){
        var cookies = document.cookie.split(';');
		    var output = '';
		    for (var i = 0; i < cookies.length; i++) {
		        if(cookies[i] !== ''){
		             var CookieKeyValue = cookies[i].split('=');
		             output+= "<div class='cookie'><strong class='key'>"+CookieKeyValue[0].trim()+"</strong>"
                     + "<a class='cookie-remove' data-target='"+CookieKeyValue[0].trim()+"'>Remove</a>"
                     + "<div id='"+CookieKeyValue[0].trim()+"' class='value' contenteditable='true'>"+CookieKeyValue[1]+"</div></div>";
		        }
		    }
            return output;
        },
        save : function(key, value, options){
            var options = options || {};
            if(options.target === undefined)
                options.target = "localStorage";
            
            if(options.target === "cookie"){    
                console.log("Saved " + key + " to "+ options.target+".");
                c.setCookie(key, value);
            }else{
                console.log("Saved " + key + " to "+ options.target+".");
                localStorage.setItem(key, value);
            }
        },
    };
    return c;
})();