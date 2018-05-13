var produceGrade = function(grade){ 
    if(grade > 50 && grade<70){
         return "satifactory"; 
    }else if (grade >70 && grade <100){
        return "excellent";
    }else{
        return "failed"; 
    }
}

console.log("grade 80 is " + produceGrade(80));
console.log("grade 60 is " + produceGrade(60));
console.log("grade 50 is " + produceGrade(50));


var a=1;

while(a<20){
    console.log(a);
    a++;
}
var sum = 0; 
for (var i=1;i<=100;i++){
    sum = sum +i;
}
console.log(sum);


var sumOfWage = function(a,b){
    var sumof = 0;
    while(a<=b){
        sumof=sumof + a; 
        a = a+1;
    }
return sumof;
}

console.log("10-90: "+sumOfWage(10,90));

var students = ['steve','shirley','max','william'];
for(var i=0;i<=students.length-1;i++){
    if (students[i][0] == 'm'){
        console.log(students[i]);
        break;
    }
}