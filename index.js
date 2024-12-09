// let x = prompt("text here", "hey boss");
// console.log(x);

// let y =confirm('are you boss ?');
// console.log(y);

//convert string
// let value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value);

// convert number
// let str = "111";
// alert(typeof str);

// let num = Number(str);
// alert(typeof num);
// alert(Number("145"));
// alert(Number("333s"));
// alert(Number(true));
// alert(Number(false));

//convert boolean

// alert(Boolean(1));
// alert(Boolean(0));
// alert(Boolean("hello"));
// alert(Boolean(""));

// alert(Boolean(' 0'))

//operators

// alert(4 ** 2)

// alert(8 ** (1/3));

// alert("3"+3)
// alert(2+3+"3")
// alert('3'+3+3)
// alert(6 -'4');

// let counter = 1;
// let a=counter++
// console.log(a);
//  ++counter;
//  console.log(counter);
// let c = ++counter;
// console.log(c);

//comma

// let a = (1+2,2*3);
// console.log(a);

// Question mark operators and ternary operator

// let age = 18;

// {
//   age > 18
//     ? console.log("hey baby")
//     : age < 18
//     ? console.log("hey baby 2")
//     : console.log("its wrong");
// }

// let a,b= ""
// {
//   a + b > 4 ? console.log("Below") : console.log("over");
// }

// logical operators or

// console.log(1||0);
// console.log(null || 1);
// console.log(null||0||1);
// console.log(undefined || null||5);

// true || console.log(`hey it's can do it`);
// false ||console.log(`hey it's work`);

//logical operators And

// console.log(1 && 1);
// console.log(0 && 1);
// console.log(undefined && 1);
// console.log(1 && 1);
// console.log(alert(1)&& 2);

// console.log(null || 2 && 6|| 4);

// 1 > 0 && console.log("hey and and is work");

// logical operators NOT

// console.log(!true);
// console.log(!false);
// console.log(!!false);
// console.log(!!true);

// nullish coalescing operator

// let x = 5;
// let y;
// console.log(x ?? "hey");
// console.log(y ?? "hey");

// console.log((1 && 2) ?? 4);

// let width,height;
// let area = height ?? 100*width ?? 50;
// console.log(area);

// let area2 = height ?? (100*width)??50;
// console.log(area2);

// loop outer:

// outer:for (let index = 0; index < 4; index++) {
//     for (let inde = 0; inde < 4; inde++) {
//          let x = prompt(`value at coords (${index},${inde})`)

//         if(!x) break outer;
//     }

// }

// let i ="1";
// let b =0;
// // while(i) console.log(i--);
// // while(i) console.log(--i);

// switch(+i){
//     case b+1:
//         console.log('hey');
//         break;
//     default:
//         console.log('hey bro');

// }

// function expresion

// function ask(question,yes,no){
//     if(confirm(question)) yes()
//     else no()
// }

// function showOK(){
//     console.log('you agreed');

// }
// function showCancel(){
//     console.log('you canceled the execution');

// }

// ask('do you agree ?',showOK,showCancel)

let age = 13;

if (age < 19) {
  function welcome() {
    console.log("hello");
  }
} else {
  function welcome() {
    alert("greetings");
  };
}

welcome()