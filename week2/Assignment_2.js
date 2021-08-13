function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}
// Try to call calculate function correctly
/*
For example, if we have an add function like this:
function add(args){
return args.n1+args.n2;
}
We can call it by passing an object created by JSON literal:
add({n1:3, n2:4}); // your first way
You should apply constructor or class as another way to create a proper object.
*/


//方法一：先存近一個類別 再丟入函數裡
class Calculate {
    constructor(n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}

const operation1 = new Calculate( 5, 7);
calculate(operation1);


//方法二：直接丟進函數
calculate({ op: '+', n1: 5, n2: 10 })
