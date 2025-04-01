var res = 0
var num = prompt ('Dime un numero y te hago una tabla de multiplicasio')
var counter = 0;
while (counter <= 10){
    res = num * counter;
    console.log(num + 'x' + counter + '=' + res);
    counter ++;
}
