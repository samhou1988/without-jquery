// GET METHOD
// var xhr = new XMLHttpRequest();
// xhr.open('GET', encodeURI('myservice/username?id=some-unique-id'));
// xhr.onload = function() {
//     if (xhr.status === 200) {
//         alert('User\'s name is ' + xhr.responseText);
//     }
//     else {
//         alert('Request failed.  Returned status of ' + xhr.status);
//     }
// };
// xhr.send();

// POST METHOD
// var newName = 'John Smith',
//     xhr = new XMLHttpRequest();

// xhr.open('POST', encodeURI('myservice/username?id=some-unique-id'));
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// xhr.onload = function() {
//     if (xhr.status === 200 && xhr.responseText !== newName) {
//         alert('Something went wrong.  Name is now ' + xhr.responseText);
//     }
//     else if (xhr.status !== 200) {
//         alert('Request failed.  Returned status of ' + xhr.status);
//     }
// };
// xhr.send(encodeURI('name=' + newName));

// URL Encoding
function param(object) {
    var encodedString = '';
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (encodedString.length > 0) {
                encodedString += '&';
            }
            encodedString += encodeURI(prop + '=' + object[prop]);
        }
    }
    return encodedString;
}

// Sending and Receiving JSON
var xhr = new XMLHttpRequest();
xhr.open('PUT', 'myservice/user/1234');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        var userInfo = JSON.parse(xhr.responseText);
    }
};
xhr.send(JSON.stringify({
    name: 'John Smith',
    age: 34
}));

// Uploading Files
var file = document.getElementById('test-input').files[0],
    xhr = new XMLHttpRequest();

xhr.open('POST', 'myserver/uploads');
xhr.setRequestHeader('Content-Type', file.type);
xhr.send(file);


// CORS
var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://someotherdomain.com');
xhr.withCredentials = true;
xhr.setRequestHeader('Content-Type', 'text/plain');
xhr.send('sometext');

// JSONP
window.myJsonpCallback = function(data) {
    // handle requested data from server
};

var scriptEl = document.createElement('script');
scriptEl.setAttribute('src',
    'http://jsonp-aware-endpoint.com/user?callback=myJsonpCallback&id=123');
document.body.appendChild(scriptEl);