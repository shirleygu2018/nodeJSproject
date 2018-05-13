var x = 10;
var y=2; 
var str = 'hello world';
var add=function(a,b){
    var c=a+b;
    return c;
}

function minus(a,b){
    return a-b;
}

function test(a,b,cb){
    return cb(a,b);
}
console.log(test(1,2,minus));
//console.log(add(1,2));
var driver={
    firstname:'joe',
    lastname:'smith',
}
var car ={
    make:'Ford',
    model:'Escape',
    year:'2018',
    color:'blue',
    speed:0,
    speedUp: function(){
        this.speed+=10;
        return this.speed;
    },
    slowdown:function(){
        this.speed-=10;
    },
    driver:driver
};
car.toString = function(){
    return this.year + ' ' + this.make + ' ' + this.model;
}
car.speedUp();
console.log(car.speedUp());
console.log(car.driver.firstname);
console.log(car.toString());
//console.log(JSON.parse(car));

var str1 = 'test';
console.log(str1[0]);

var students = ['steve','shirley','max','sean'];
console.log(students.length);

console.log(students.indexOf('max'));

console.log(students.push('test'));
console.log(students.toString());

var cars =[
    {
    make:'Ford',
    model:'Escape',
    year:'2018',
    color:'blue'},
    {
        make:'Ford1',
        model:'Escape1',
        year:'2018',
        color:'blue1'}]

console.log(cars);

var binOps=[
    
    function(a,b){
        return a+b;
    },
    function (a,b){
        return a*b;
    }

]

console.log(binOps[0](2,3));
console.log(binOps[1](2,3));
