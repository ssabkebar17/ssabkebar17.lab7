// Q1)
// undefined889101

// Q2) Global Scope : all variables out of blocks. These variables can be access to any any where on the code.
// If variable is not defined and has a value. It consider as global scope such that the variable is window level variable
//      Local Scope:  variable  inside a function or the block. Var variables are scope to nearest function where let and const 
// Variables scope to nearest block

// Q3) 
// a. No
// b. Yes
// c. No
// d. Yes
// e.Yes 
// Q4) 8125
// Q5) 10

// //Q6
// count = {
//      add :function (){
//           var counter =0;
//           return function (){
//                return counter+=1;
//           }
//           ()
          
//      },
    
//      reset:function (){
//           var counter =this.add();
//            return function (){
//                 return counter-=1;
//            }
//       ()
//       }
// };

// console.log( count.add())
// console.log(count.reset())




// Q7) counter if free variable  

// Q8)
// var make_adder =function (x){
//      var counter =0;
//      return function (){
//           return counter+=x;
//      }
     
     
// }()
// const add4 =make_adder()

// console.log( add4)
// console.log( add4)
// var make_adder =function (4){
//      var counter =0;
//      return function (){
//           return counter+=4;
//      }
     
     
// }()
// const add4 =make_adder(4)

// console.log( add4)
// console.log( add4)


// Q9)
// We can use  delete window.global such delete (variable); or  we can clear value on variable from the global object by reassign variable value to empty string .also we can remove DOM element by using remove()

//  Q10)


// //Q10

// const add4 =make_adder(4)

// console.log( add4())//4
// console.log( add4())//8
// console.log( add4())//4
// console.log( add4())//8

// Employee = (age1,name1, salary1)=>{
//      name= nam1;
//      age =30;
//      salary =salary1;;

//       return {
//           name,
//           age,
//           salary,

//       }
      

// }

