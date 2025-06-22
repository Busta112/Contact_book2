
//Global Variables
let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";//The url of the server
let apiKey = checkApiKey();


//key is a speacial code use to communicate with an API
//Everyone must have an API key for security purpose, so that everyone must not have an access to your API
function checkApiKey() {
    //Check if you have the API Key that is set on your computer
    //My API Key is my Email Address the one is used to register on itvarsity, in order to use 
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
