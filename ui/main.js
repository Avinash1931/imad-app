//counter code
var button =document.getElementById('counter');

button.onclick = function () {
    
    // Create a request Object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function (){
        if (request.readystate === XMLHttpRequest.DONE) {
            // Take some action
            if (request.status ===200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
        // Not done yet 
    };
    //Make te request
    request.open('GET', 'http://avinashchinku19.imad.hasura-app.io/counter',true);
    request.send(null); 
};