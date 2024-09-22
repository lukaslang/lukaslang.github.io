/* 

Code borrowed from Stackoverflow user Sankalp Sharma.

Licensed under CC BY-SA 4.0, see https://creativecommons.org/licenses/by-sa/4.0/

Source: https://stackoverflow.com/questions/51833090/put-google-analytics-code-in-an-js-file/51833302

*/

/*This function will load script and call the callback once the script has loaded*/
function loadScriptAsync(scriptSrc, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Not a valid callback for async script load');
    }
    var script = document.createElement('script');
    script.onload = callback;
    script.src = scriptSrc;
    document.head.appendChild(script);
}

/* This is the part where you call the above defined function and "call back" your code which gets executed after the script has loaded */
loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-9QWGM6GHNR', function(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9QWGM6GHNR', { 'anonymize_ip': true });
})
