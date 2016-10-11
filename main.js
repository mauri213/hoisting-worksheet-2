//1.
var myObj = { class: [] };
var className = 'animating';

function animateLeft(obj) {
	var blah = 'left'; 
    obj.class.push(className); // it gets pushed up.
    obj.class.push(blah); // this is coming back as undefined because it is using the same parameter.
}

animateLeft(myObj);
console.log(myObj);

//2.
function formatTemp(temp, celcius) {
	var unit = 'F'; // this needs to be locally so that it is ran first.
    var wether = unit;
    if (celcius) {
        wether = 'C';
    }
    return temp + '&deg;' + wether; // unit is undefinied because C has no value.
}

var temp = formatTemp(99);

console.log(temp);

//3.
var update = true;
var a = 0;

function increment() {
    if (update === false) { // this if statement does not work becomes it is not defined. the update value does not let the second function execute
        return;
    }

    function inc() { // update was changed to inc so that this can be executed after the first if statement brings back a number greater than 10.
        a++;
        if (a >= 10) {
            update = false;
        }
    }

    inc();
}

for (var i = 0; i < 50; i++) {
    increment();
}

console.log(a);

//4.
function outer() {
    function inner() { return 'Hello'; }
    return inner(); // inner was not declared. It works but it is bad practice. #stupid
}

console.log(outer());


//5.
var logTime = function logTime () { // the variable was hoisted but not the function. 
    var date = new Date();
    console.log('The time is ' + date.getHours() + ':' + date.getMinutes());
};

logTime(); // moved this logTime down here so it is run after local is completed.





