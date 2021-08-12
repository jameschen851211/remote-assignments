function max(numbers){
    var max = this[0];
    for (var i = 1; i < this.length; i ) {
        if (this[i] > max) {
            max = this[i];
        }
    }
return max;
}
    max([1, 2, 4, 5]); // result to 5 
    max([5, 2, 7, 1, 6]); // result to 7