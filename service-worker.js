host = ""
port = 0
username = ""
password = ""


var config = {
    mode:"fixed_servers",
    rules:{
        singleProxy:{
            host:host,
            port:port,
            scheme:"http",
        },
        bypassList:["localhost"] //wont use a proxy for these sites
    }
}

chrome.proxy.settings.set(
    {value:config,scope:"regular"},
    function(){
        console.log("setting proxy")
    }
)

// supply proxy auth credentials when prompted.
chrome.webRequest.onAuthRequired.addListener(
    function(details) { //
        console.log("auth request. approving.")
        return {
            authCredentials:{
                username:username,
                password:password
            }
        }
    },
    {
        urls:["<all_urls>"] //which urls to provide credentials for
    },
    ["blocking"] //block the request until auth details have been supplied
)