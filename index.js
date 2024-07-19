//IF GA OID MASALALAR 

/*If1 Foydalanuvchi yoshi kiritiladi. Agar foydalanuvchi 18 yoshga to'lgan bo'lsa, 
"Siz katta yoshdagisiz", aks holda "Siz hali yoshsiz" deb chiqaring.*/
/*
let age = +prompt("Yoshingizni kiriring");
let res;
if(age>=18){
    res='Siz katta yoshdagisiz';
}
else{
    res='Siz hali yoshsiz';
}
console.log(res);
*/

/*if2 Foydalanuvchi tomonidan kiritilgan son juft yoki toqligini aniqlang va natijani konsolda chiqaring*/
/*
let number = +prompt('Ixtiyoriy son kiriting');
let res;
if(number%2==0){
    res='Juft son';
}
else{
    res='Toq son';
}
console.log(res);
*/

/*if3 Foydalanuvchi tomonidan kiritilgan son musbat yoki manfiy ekanligini aniqlang va natijani konsolda chiqaring.*/
/*
let number = +prompt('Ixtiyoriy son kiriting')
let res;
if(number>0){
    res='Musbat son';
}
else if(number<0){
    res='Manfiy son';
}
else{
    res='0 ga teng';
}
console.log(res);
*/

/*if4 Foydalanuvchi harorat kiritadi. Agar harorat 20 darajadan yuqori bo'lsa, 
"Yengil kiying", aks holda "Qalin kiying" deb tavsiya bering */
/*
let temparature = +prompt('Haroratni kiriting');
let res;
if(temparature>20){
    res='Yengil kiying';
}
else{
    res='Qalin kiying';
}
console.log(res);
*/

/*if5 Foydalanuvchi tomonidan kiritilgan imtihon balliga qarab baho bering. 
90 va undan yuqori ball - "A'lo", 70-89 ball - "Yaxshi", 50-69 ball - "Qoniqarli", 50 dan past - "Yomon".*/
/*
let grade = +prompt('Ball kiriting');
let res;
if(grade>=90){
    res="A'lo";
}
if(grade>=70 && grade<90){
    res='Yaxshi';
}
if(grade>=50 && grade<70){
    res='Qoniqarli';
}
if(grade<50){
    res='Yomon';
}
console.log(res);
*/

/*if6 Mehmonning ismi kiritiladi. Agar ism "Ali" bo'lsa, "Salom, Ali!",
 aks holda "Salom, mehmon!" deb chiqaring.*/
/*
let ism = +prompt('Ism kiriting');
let res;
if(ism == 'Ali'){
res='Salom, Ali!';
}
else{
    res='Salom, mehmon!';
}
console.log(res);
*/

/*if7 Foydalanuvchi xarid summasini kiritadi. Agar summa 100 dan katta bo'lsa, 
"Chegirma qo'llanildi", aks holda "Chegirma mavjud emas" deb chiqaring.*/
/*
let narx = +prompt('Narxni kiriting');
let res;
if(narx>100){
    res="Chegirma qo'llanildi";
}
else{
    res="Chegirma mavjud emas";
}
console.log(res);
*/


// TERNARY GA OID MASALALAR

/*Ternary1 Foydalanuvchi harorat kiritadi. Agar harorat 25 darajadan yuqori bo'lsa,
"Issiq" deb, aks holda "Sovuq" deb chiqaring*/
/*
let temp = +prompt('Haroratni kiriting');
temp>25 ? console.log('Issiq') : console.log("Sovuq");;
*/

/*Ternary2 Foydalanuvchi imtihon ballini kiritadi. Agar ball 50 yoki undan yuqori bo'lsa,
"O'tdi" deb, aks holda "Yiqildi" deb chiqaring.*/
/*
let grade = +prompt("Ballni kiriting");
grade>=50 ? console.log("O'tdi") : console.log("Yiqildi");;
*/

/*Ternary3 Foydalanuvchi son kiritadi. Agar son musbat bo'lsa, "Musbat" deb, aks holda "Manfiy" deb chiqaring.*/
/*
let num = +prompt('Son kiriting');
num>0?console.log("Musbat"):(num<0?console.log("Manfiy"):console.log("0 ga teng"));;
*/


// FOR GA OID MASALALAR

/*for1 1 dan 10 gacha bo'lgan sonlarni konsolga chiqaring*/
/*
for( let i=1; i<=10; i++){
    console.log(i);
}
*/

/*for2 10 dan 1 gacha bo'lgan sonlarni konsolga chiqaring */
/*
for( let i=10; i>=1; i--){
    console.log(i);
}
*/

/*for3 1 dan 100 gacha bo'lgan juft sonlarni konsolga chiqaring*/
/*
for( let i=2; i<100; i+=2){
    console.log(i);
}
*/

/*for4 1 dan 100 gacha bo'lgan toq sonlarni konsolga chiqaring*/
/*
for( let i=1; i<100; i+=2){
    console.log(i);
}
*/

/*for5 1 dan 10 gacha bo'lgan sonlarning yig'indisini hisoblang */
/*
let sum = 0;
for( let i=1; i<=10; i++){
    sum=sum+i;
}
console.log(sum);
*/

/*for6 1 dan 10 gacha bo'lgan sonlarning ko'paytmasini hisoblang */
/*
let a = 1;
for( let i=1; i<=10; i++){
    a=a*i;
}
console.log(a);
*/

/*for7 Foydalanuvchi tomonidan kiritilgan sonning faktorialini hisoblang */ 
/*
let son = +prompt('Sonni kiriting');
let res=1;
for(let i = 1; i<=son; i++){
    res=res*i;
}
console.log(res);
*/

/*for8 1 dan 50 gacha bo'lgan sonlarning kvadratlarini konsolga chiqaring */
/*
let res=1;
for(let i=1; i<=50;i++){
    res=i**2;
    console.log(res);
}
*/

/*for9 1 dan 20 gacha bo'lgan sonlarning kublarini konsolga chiqaring */ 
/*
let res=1;
for(let i=1; i<=20;i++){
    res=i**3;
    console.log(res);
}
*/

/*for10 1 dan 1000 gacha bo'lgan barcha sonlarning yig'indisini hisoblang */
/*
let sum = 0;
for( let i=1; i<=100; i++){
    sum=sum+i;
}
console.log(sum);
*/

/*for11 "Salom" so'zini 5 marta konsolga chiqaring */
/*
let a = 'Salom';
for(let i=1; i<=5;i++){
    console.log(a);
}
*/

/*for12 1 dan 100 gacha bo'lgan sonlarni ikki barobar ko'paytirib konsolga chiqaring */
/*
for(i=1;i<=100;i++){
    console.log(i*2);
}
*/

/*for13  2 ning 1 dan 10 gacha bo'lgan barcha darajalarini konsolga chiqaring */
/*
for(let i=1;i<=10;i++){
    console.log(2**i);
}
*/  

/*for14 Foydalanuvchi tomonidan kiritilgan sonning kvadratini hisoblang va konsolga chiqaring */
/*
let num = +prompt('Sonni kiriting');
let res=1;
for(let i=1; i<=2; i++){
    res=res*num;
}
console.log(res);
*/

/*Alfavitni konsolga chiqaring*/
/*
let startCharCode = 'a'.charCodeAt(0);
let endCharCode = 'z'.charCodeAt(0);
for (let i = startCharCode; i <= endCharCode; i++) {
  console.log(String.fromCharCode(i));
}
*/


//BOOLEAN GA OID MASALALAR

/*bool11 Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring 
"A va B sonlari har ikkalasi ham yoki toq son yoki juft son"*/
/*
let A = +prompt('A sonni kiriting');
let B = +prompt('B sonni kiriting');
if(A%2==0 && B%2==0 || A%2==0 && B%2==0){
    console.log('True');
}
else{
    console.log('False');
}
*/

/*bool12 Uchta A B C butun sonlar berilgan. Jumlani rostlikka tekshiring
"A B C sonlarni har biri musbat"*/
/*
let A = +prompt('A sonni kiriting');
let B = +prompt('B sonni kiriting');
let C = +prompt('C sonni kiriting');
if(A>0 && B>0 && C>0){
    console.log('True');
}
else{
    console.log('False');
}
*/

/*bool13 Uchta A B C butun sonlar berilgan. Jumlani rostlikka tekshiring
"A B C sonlarni hech bo'lmaganda bittasi musbat"*/
/*
let A = +prompt('A sonni kiriting');
let B = +prompt('B sonni kiriting');
let C = +prompt('C sonni kiriting');
if(A>0 || B>0 || C>0){
    console.log('True');
}
else{
    console.log('False');
}
*/


/*bool14 Uchta A B C butun sonlar berilgan. Jumlani rostlikka tekshiring
"A B C sonlarni faqat bittasi musbat"*/
/*
let A = +prompt('A sonni kiriting');
let B = +prompt('B sonni kiriting');
let C = +prompt('C sonni kiriting');
if(A>0,B<=0,C<=0 && A<=0,B>0,C<=0 && A<=0,B<=0,C>0){
    console.log('True');
}
else{
    console.log('False');
}
*/

/*bool15 Uchta A B C butun sonlar berilgan. Jumlani rostlikka tekshiring
"A B C sonlarni faqat ikkitasi musbat"*/
/*
let A = +prompt('A sonni kiriting');
let B = +prompt('B sonni kiriting');
let C = +prompt('C sonni kiriting');
if(A<=0,B>0,C>0 && A>0,B<=0,C>0 && A>0,B>0,C<=0){
    console.log('True');
}
else{
    console.log('False');
}
*/


/*bool16 Musbat son berilgan Jumlani rostlikka tekshiring
"Berilgan son ikki xonali juft son"*/
/*
let n = +prompt('son kiriting');
if(n>9 && n<100 && n%2==0){
    console.log('True');
}
else{
    console.log('False');
}*/