"use strict";
const button1 = document.createElement('button');
button1.innerText = '18_1';
button1.addEventListener('click', function() {
    let a=10;
    let b=2;

    alert(a+b);
    alert(a-b);
    alert(a*b);
    alert(a/b);

});
document.getElementById('btn1').appendChild(button1);

const button2 = document.createElement('button');
button2.innerText = '18_2';
button2.addEventListener('click', function() {
    let c=10, d=5;
    let result = c+d;
    alert(result);

});
document.getElementById('btn2').appendChild(button2);

const button3 = document.createElement('button');
button3.innerText = '18_3';
button3.addEventListener('click', function() {
    let a=1, b=2, c=3;
    alert(a+b+c);

});
document.getElementById('btn3').appendChild(button3);

const button4 = document.createElement('button');
button4.innerText = '18_4';
button4.addEventListener('click', function() {
    let a=10, b=5, c=a-b, d=7, result=c+d;
    alert(result);
});
document.getElementById('btn4').appendChild(button4);

const button5 = document.createElement('button');
button5.innerText = '19_1';
button5.addEventListener('click', function() {
    let a = 5 + 5 * 3;
    alert(a);
});
document.getElementById('btn5').appendChild(button5);

const button6 = document.createElement('button');
button6.innerText = '19_2';
button6.addEventListener('click', function() {
    let a = 5 + 5 * 3 + 3;
    alert(a);
});
document.getElementById('btn6').appendChild(button6);

const button7 = document.createElement('button');
button7.innerText = '19_3';
button7.addEventListener('click', function() {
    let a = 8 / 2 + 2;
    alert(a);
});
document.getElementById('btn7').appendChild(button7);

const button8 = document.createElement('button');
button8.innerText = '19_4';
button8.addEventListener('click', function() {
    let a = 8 + 2 / 2;
    alert(a);
});
document.getElementById('btn8').appendChild(button8);

const button9 = document.createElement('button');
button9.innerText = '20_1';
button9.addEventListener('click', function() {
    let a = 8 / 2 * 2;
    alert(a);
});
document.getElementById('btn9').appendChild(button9);

const button10 = document.createElement('button');
button10.innerText = '20_2';
button10.addEventListener('click', function() {
    let a = 8 * 4 / 2 / 2;
    alert(a);
});
document.getElementById('btn10').appendChild(button10);

const button11 = document.createElement('button');
button11.innerText = '21_1';
button11.addEventListener('click', function() {
    let a = (2 + 3) * (2 + 3);
    alert(a);
});
document.getElementById('btn11').appendChild(button11);

const button12 = document.createElement('button');
button12.innerText = '21_2';
button12.addEventListener('click', function() {
    let a = (2 + 3) * 2 + 3;
    alert(a);
});
document.getElementById('btn12').appendChild(button12);

const button13 = document.createElement('button');
button13.innerText = '21_3';
button13.addEventListener('click', function() {
    let a = 2 * (2 + 4 * (3 + 1));
    alert(a);
});
document.getElementById('btn13').appendChild(button13);

const button14 = document.createElement('button');
button14.innerText = '21_4';
button14.addEventListener('click', function() {
    let a = 2 * 8 / 4;
    alert(a);
});
document.getElementById('btn14').appendChild(button14);

const button15 = document.createElement('button');
button15.innerText = '21_5';
button15.addEventListener('click', function() {
    let a = (2 * 8) / 4;
    alert(a);
});
document.getElementById('btn15').appendChild(button15);

const button16 = document.createElement('button');
button16.innerText = '21_6';
button16.addEventListener('click', function() {
    let a = 2 * (8 / 4);
    alert(a);
});
document.getElementById('btn16').appendChild(button16);

const button17 = document.createElement('button');
button17.innerText = '22_1';
button17.addEventListener('click', function() {
    let a=1.5, b=0.75;
    alert(a+b);
});
document.getElementById('btn17').appendChild(button17);

const button18 = document.createElement('button');
button18.innerText = '23_1';
button18.addEventListener('click', function() {
    let a=-100;
    alert(a);
});
document.getElementById('btn18').appendChild(button18);

const button19 = document.createElement('button');
button19.innerText = '23_2';
button19.addEventListener('click', function() {
    let a=-52;
    alert(-a);
});
document.getElementById('btn19').appendChild(button19);

const button20 = document.createElement('button');
button20.innerText = '25_1';
button20.addEventListener('click', function() {
    let a = 13;
    let b = 5;
    alert(a % b);
});
document.getElementById('btn20').appendChild(button20);

const button21 = document.createElement('button');
button21.innerText = '26_1';
button21.addEventListener('click', function() {
    alert(2 ** 10);
});
document.getElementById('btn21').appendChild(button21);

const button22 = document.createElement('button');
button22.innerText = '27_1';
button22.addEventListener('click', function() {
    let a = 3 * 2 ** 3;
    alert(a);
});
document.getElementById('btn22').appendChild(button22);

const button23 = document.createElement('button');
button23.innerText = '27_2';
button23.addEventListener('click', function() {
    let a = (3 * 2) ** 3;
    alert(a);
});
document.getElementById('btn23').appendChild(button23);

const button24 = document.createElement('button');
button24.innerText = '27_3';
button24.addEventListener('click', function() {
    let a = 3 * 2 ** (3 + 1);
    alert(a);
});
document.getElementById('btn24').appendChild(button24);

const button25 = document.createElement('button');
button25.innerText = '27_4';
button25.addEventListener('click', function() {
    let a = 2 ** 3 * 3;
    alert(a);
});
document.getElementById('btn25').appendChild(button25);

const button26 = document.createElement('button');
button26.innerText = '27_5';
button26.addEventListener('click', function() {
    let a = 3 * 2 ** 3 * 3;
    alert(a);
});
document.getElementById('btn26').appendChild(button26);

const button27 = document.createElement('button');
button27.innerText = '28_1';
button27.addEventListener('click', function() {
    let name = 'Ruslan ', surname = 'Fazilov';
    alert(name + surname);
});
document.getElementById('btn27').appendChild(button27);

const button28 = document.createElement('button');
button28.innerText = '29_1';
button28.addEventListener('click', function() {
    let str = '!!!';
    alert(str);
});
document.getElementById('btn28').appendChild(button28);

const button29 = document.createElement('button');
button29.innerText = '29_2';
button29.addEventListener('click', function() {
    let java = 'java', script = 'script';
    alert(java + script);
});
document.getElementById('btn29').appendChild(button29);

const button30 = document.createElement('button');
button30.innerText = '29_3';
button30.addEventListener('click', function() {
    let hello = 'Hello', world = 'world!';
    alert(hello + ' ' + world);
});
document.getElementById('btn30').appendChild(button30);

const button31 = document.createElement('button');
button31.innerText = '30_1';
button31.addEventListener('click', function() {
    alert('Hello world!'.length);
});
document.getElementById('btn31').appendChild(button31);

const button32 = document.createElement('button');
button32.innerText = '31_1';
button32.addEventListener('click', function() {
    let str1 = 'xxx';
    let str2 = 'yyy';
    let txt  = `aaa ${str1} bbb ${str2} ccc`;

    alert(txt);
});
document.getElementById('btn32').appendChild(button32);

const button33 = document.createElement('button');
button33.innerText = '32_1';
button33.addEventListener('click', function() {
    let str = `a
        b
        c`;

    alert(str);
});
document.getElementById('btn33').appendChild(button33);

const button34 = document.createElement('button');
button34.innerText = '34_1';
button34.addEventListener('click', function() {
    let a = undefined;
    alert(a);
});
document.getElementById('btn34').appendChild(button34);

const button35 = document.createElement('button');
button35.innerText = '35_1';
button35.addEventListener('click', function() {
    let a = null;
    alert(a);
});
document.getElementById('btn35').appendChild(button35);

const button36 = document.createElement('button');
button36.innerText = '36_1';
button36.addEventListener('click', function() {
    let a = true;
    alert(a);
});
document.getElementById('btn36').appendChild(button36);

const button37 = document.createElement('button');
button37.innerText = '36_2';
button37.addEventListener('click', function() {
    let a = false;
    alert(a);
});
document.getElementById('btn37').appendChild(button37);

const button38 = document.createElement('button');
button38.innerText = '37_1';
button38.addEventListener('click', function() {
    let a = 'txt1', b = 'txt2';
    alert(a * b);
});
document.getElementById('btn38').appendChild(button38);

const button39 = document.createElement('button');
button39.innerText = '38_1';
button39.addEventListener('click', function() {
    alert(10/0);
});
document.getElementById('btn39').appendChild(button39);