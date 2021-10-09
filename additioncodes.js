//combined into one line//
//const total = [10, 20, 30, 40].reduce((result, value) => result + value);

//the same, but split into two lines//
//const numbers = [10, 20, 30, 40];
//const splittotal = numbers.reduce((result, value) => result + value);

//the same, but even more split up//
//const reducer = (reduce, value) => result + value;
//const numbers = [10, 20, 30, 40];
//const complextotal = numbers.reduce(reducer);

//the same, but verbose as heck//
function reducer(result, value) {
    return result + value;
}
const numbers = [10, 20, 30, 40];
const verbosetotal = numbers.reduce(reducer);

//can't define the same thing twice, obviously, hence the slashes to disable them//

//console.log('total = ' + total);
//console.log('splittotal = ' + splittotal);
//console.log('complextotal = ' + complextotal);
console.log('verbosetotal = ' + verbosetotal);