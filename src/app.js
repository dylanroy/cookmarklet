(function(){
    var base = document,
    e = base.getElementById('cookmarklet-container');
    if(e!==null){
        base.body.removeChild(e);
    }
    var host = 'http://localhost:8000/',
    timestamp = new Date().getTime(),
    container = base.createElement('div'),
    closeLink = base.createElement('a'),
    cookiesList = base.createElement('div'),
    cssLink = base.createElement('link'),
    scripts = base.createElement('script');
    container.setAttribute('id', 'cookmarklet-container');
    closeLink.setAttribute('id', 'cookmarklet-close');
    closeLink.setAttribute('href', "javascript: window.document.body.removeChild(window.document.getElementById('cookmarklet-container')); void(0);");
    cookiesList.setAttribute('id', 'cookies');
    cssLink.setAttribute('rel', 'stylesheet');
    cssLink.setAttribute('href', host+'css/cookmarklet.css');
    base.head.appendChild(cssLink);
    container.appendChild(closeLink);
    container.appendChild(cookiesList);
    scripts.setAttribute('src', host+'js/cookmarklet.js?'+timestamp);
    container.appendChild(scripts);
    base.body.appendChild(container);
    closeLink.innerText = 'Close';
    scripts.onload = function(){ 
        driver = base.createElement('script');
        driver.setAttribute('src', host+'js/driver.js?'+timestamp);
        base.body.appendChild(driver); 
    };
})();