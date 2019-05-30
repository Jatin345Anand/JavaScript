var s='APPLIED PHYSICS-II REAPPEAR';
undefined
s.match('REAPPEAR');
["REAPPEAR", index: 19, input: "APPLIED PHYSICS-II REAPPEAR", groups: undefined]0: "REAPPEAR"groups: undefinedindex: 19input: "APPLIED PHYSICS-II REAPPEAR"length: 1__proto__: Array(0)
s.match('REAPPEAR').index;
19
s.match('REVISED').index;
VM72634:1 Uncaught TypeError: Cannot read property 'index' of null
    at <anonymous>:1:19
(anonymous) @ VM72634:1
s.match('REVISED');
null
s.substring(0,19);
"APPLIED PHYSICS-II "
s.substring(0,18);
"APPLIED PHYSICS-II"
s;
"APPLIED PHYSICS-II REAPPEAR"
if(s.match('REAPPEAR')!=null){console.log(s.substring(0,s.match('REAPPEAR').index-1));}
VM75186:1 APPLIED PHYSICS-II
undefined
if(s.match('REVISED')!=null){console.log(s.substring(0,s.match('REVISED').index-1));}
undefined
s
"APPLIED PHYSICS-II REAPPEAR"
s1='APPLIED PHYSICS-II REVISED';
"APPLIED PHYSICS-II REVISED"
s2='APPLIED PHYSICS-II RECHECKING';
"APPLIED PHYSICS-II RECHECKING"
if(s1.match('REVISED')!=null){console.log(s.substring(0,s1.match('REVISED').index-1));}
VM75462:1 APPLIED PHYSICS-II
undefined
if(s2.match('RECHECKING')!=null){console.log(s.substring(0,s2.match('RECHECKING').index-1));}
VM75602:1 APPLIED PHYSICS-II
undefined
s2='APPLIED PHYSICS-II';
"APPLIED PHYSICS-II"
s2='APPLIED PHYSICS-II RECHECKING';
"APPLIED PHYSICS-II RECHECKING"
s3='APPLIED PHYSICS-II'
"APPLIED PHYSICS-II"
if(s3.match('RECHECKING')==null || s3.match('REAPPEAR')==null || s3.match('REVISED')==null){console.log(s3));}
VM76005:1 Uncaught SyntaxError: Unexpected token )
if(s3.match('RECHECKING')==null || s3.match('REAPPEAR')==null || s3.match('REVISED')==null){console.log(s3);}
VM76036:1 APPLIED PHYSICS-II
undefined
