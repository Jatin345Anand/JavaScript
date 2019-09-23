function Traverse(s,e,A){
for(var i=s;i<=e;i++){console.log(A[i);}
}
VM391:2 Uncaught SyntaxError: Unexpected token )
function Traverse(s,e,A){
for(var i=s;i<=e;i++){console.log(A[i]);}
}
undefined
var Arr = [2,3,4,1,5,6,7,34,4,0,11,36];
console.log(Arr.length);
VM531:2 12
undefined
var TotalPartitions = Arr.length/3;
undefined
TotalPartitions
4
for(var i=1;i<=TotalPartitions;i++){
console.log(3*1);
}
4VM723:2 3
undefined
for(var i=1;i<=TotalPartitions;i++){
console.log(3*i);
}
VM740:2 3
VM740:2 6
VM740:2 9
VM740:2 12
undefined
var start=0;
for(var i=1;i<=TotalPartitions;i++){
console.log(start,3*i);
}
VM797:3 0 3
VM797:3 0 6
VM797:3 0 9
VM797:3 0 12
undefined
var start=0;
for(var i=1;i<=TotalPartitions;i++){
console.log(start*i-1,3*i);
}
VM829:3 -1 3
VM829:3 -1 6
VM829:3 -1 9
VM829:3 -1 12
undefined
var start=0;
for(var i=1;i<=TotalPartitions;i++){
console.log(start,3*i);
start = start+3;
}
VM918:3 0 3
VM918:3 3 6
VM918:3 6 9
VM918:3 9 12
12
var start=0;
for(var i=1;i<=TotalPartitions;i++){
console.log(start,3*i);
start = start+3;
}
VM921:3 0 3
VM921:3 3 6
VM921:3 6 9
VM921:3 9 12
12
var start=0;
for(var i=1;i<=TotalPartitions;i++){
console.log(start,3*i);
Traverse(start,(3*i)-1,Arr);
start = start+3;
}
VM1025:3 0 3
VM400:2 2
VM400:2 3
VM400:2 4
VM1025:3 3 6
VM400:2 1
VM400:2 5
VM400:2 6
VM1025:3 6 9
VM400:2 7
VM400:2 34
VM400:2 4
VM1025:3 9 12
VM400:2 0
VM400:2 11
VM400:2 36
12
Arr
(12) [2, 3, 4, 1, 5, 6, 7, 34, 4, 0, 11, 36]
var start=0;
for(var i=1;i<=TotalPartitions;i++){
// console.log(start,3*i);
Traverse(start,(3*i)-1,Arr);
start = start+3;
}
VM400:2 2
VM400:2 3
VM400:2 4
VM400:2 1
VM400:2 5
VM400:2 6
VM400:2 7
VM400:2 34
VM400:2 4
VM400:2 0
VM400:2 11
VM400:2 36
12
