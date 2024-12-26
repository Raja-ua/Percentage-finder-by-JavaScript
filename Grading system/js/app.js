let Name =  prompt("Enter Name") ; 

let Physics = + prompt("Enter Phy Number");
let Chemistry = + prompt("Enter Chem Number");
let Biology = + prompt("Enter Bio Number");
let Math = + prompt("Enter Math Number");
let Urdu= + prompt("Enter Urdu Number");

let Obtain = Phy + Chem + Math + Bio + Urdu
let Percentage    = (Obtain / 500) * 100

if (Percentage >= 90 && Percentage <= 100 ){
    document.write("Your Percentage is " + Percentage + " and your grade is A+"  )
}
else if (Percentage >= 80 && Percentage <= 89 ){
    document.write("Your Percentage is " +  Percentage + " and your grade is A"  )
}
else if (Percentage >= 70 && Percentage <= 79 ){
    document.write("Your Percentage is " + Percentage + " and your grade is B+" )
}
else if (Percentage >= 60 && Percentage <= 69 ){
    document.write("Your Percentage is " + Percentage + " and your grade is B"  )
}
else if (Percentage >= 50 && Percentage <= 59 ){
    document.write("Your Percentage is " + Percentage + " and your grade is C"  )
}
else if (Percentage >= 0 && Percentage <= 49 ){
    document.write("Your Percentage is " + Percentage + " and you are Fail"  )
}
