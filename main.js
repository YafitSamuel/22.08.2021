// ====================================22.08.2021===========================================

// var arrayMesimot=[
//     {name:"a",isComplit:true},
//     {name:"d",isComplit:true},
//     {name:"c",isComplit:false},
//     {name:"d",isComplit:false},
//     {name:"e",isComplit:false},
// ]
//  for (var i = 0; i < arrayMesimot.length; i++) {
//      arrayMesimot[i].id=Math.random()*1999
//      console.log(arrayMesimot);

//      if(arrayMesimot[i].isComplit==true){
//        document.write(`<p style="background:red">${arrayMesimot[i].name}</p>`) 
//      }

//     document.write(` ${arrayMesimot[i].name}`)
//     document.write(` ${arrayMesimot[i].isComplit}`)
// //  }
// // // ==================================================
// var input=document.getElementById("in")
// var button=document.getElementById("btn")
// var div=document.getElementById("div")

// button.onclick=function(){
//     var object={name:input.value,isComplit:false}
//     arrayMesimot.push(object)
//     console.log(arrayMesimot);
//     div.innerHTML += `<div>${object.name},${object.isComplit}</div>`
// }


// // צור מערך של סרטים המכיל: שם, תמונה, מערך של שחקנים(3 לפחות)
// // הצג את כל הסרטים כולל כל השחקנים
// var arrayMovies=[
//   {name:"anna",
//     pic:`<p><img src="https://media.istockphoto.com/photos/actor-reading-his-scripts-on-stage-picture-id867391504?b=1&k=6&m=867391504&s=170667a&w=0&h=nTSaM6jw63s-3DGwYhBS_hBOQ44xnmSsgQe4iV1w31c=" </p>`, 
//     actor:["play1","play2","play3"],
//     },
//      {name:"yafit",
//     pic:`<p><img src="https://media.istockphoto.com/photos/pop-corn-and-on-red-armchair-cinema-picture-id1271522601?b=1&k=6&m=1271522601&s=170667a&w=0&h=BShq3pbek7XOQYnVdeQOSZ9I6JSRI_Mx0QeNgdF6UlM=" </p>`,
//     actor:["play1","play2","play3"],
//     },
//    {name:"roni",
//     pic:`<p><img src="https://media.istockphoto.com/photos/mother-and-daughter-using-digital-tablet-inside-illuminated-cozy-hut-picture-id1270068977?b=1&k=6&m=1270068977&s=170667a&w=0&h=bDnRuknMbq1WeC_pxKrOi70sZoEXXBUcMmIa7EvEltQ=" </p>` ,
//     actor:["play1","play2","play3"],
//     }
// ]
// for(var i=0;i<arrayMovies.length;i++){
//     document.write(`<div>${arrayMovies[i].name},${arrayMovies[i].pic},${arrayMovies[i].actor[i]}</div>`)
// }

// // ========================2========================
// // צור Input וכפתור בלחיצה על הכפתור הוסף את הערך לחלון 

// var input1 = document.getElementById("aa")
// var button1 = document.getElementById("bb")

// button1.onclick = function () {
//     var array = []
//     array.push(input1.value)
//     document.write(`<p>${array}</p>`)
// }
// // ========================3========================
// // צור 2 אלמנטים של Input וכפתור, בלחיצה על הכפתור צור אובייקט עם השדות
// var inputone=document.getElementById("one")
// var inputtwo=document.getElementById("two")
// var button3=document.getElementById("3a")
// var array=[]
// button3.onclick=function(){
//     var object={object1:inputone.value, object2:inputtwo.value}
//     array.push(object)
//     document.write(`<p>${object.object1},${object.object2}</p>`)

// // }
// // ========================4========================
// // צרו טופס של משתמש: שם פרטי, אימייל, גיל
// // לחיצה על שלח יוצרת אובייקט עם אותם שדות
// // הציגו את האובייקט על המסך

// var ina=document.getElementById("ina")
// var inb=document.getElementById("inb")
// var inc=document.getElementById("inc")
// var button=document.getElementById("button")
// var arraya=[]
// button.onclick=function(){
//     newObject={email:"xkcxn",age:13,name:"ron"}
//     arraya.push(newObject)
//     document.write(`<div>${newObject.name},${newObject.email},${newObject.age}</div>`)
// }
// // ========================5========================
// // קלוט שם פרטי ומשפחה דרך Input מתאים
// // בלחיצה על כפתור צור אובייקט של אדם עם עם אותם השדות התכונות.

// var input5=document.getElementById("full")
// var button5=document.getElementById("enter5")
// var array5=[]
// button5.onclick=function(){
//     var person={firstname:"yaf",lastname:"sum"}
//     array5.push(person)
//     document.write(`<p>firstname:${person.firstname},lastname:${ person.lastname}</p>`)

// }
// // ========================6========================
// // צרו לולאה שיוצרת 10 אלמנטי P המכיל את ה- Index כטקסט.
// // document.write(`<h1>6</h1>`)
// // for (var i = 0; i < 10; i++) {
// //     document.write(`<p>index:${i} element p</p>`)

// // }
// // ========================7========================
// // נתון מערך של מיילים, בקש מהמשתמש להכניס את האימייל שלו דרך אלמנט INPUT חפש האם קיים הצג הודעה מתאימה על אלמנט P.
// var emaill=document.getElementById("emaill")
// var button7=document.getElementById("button7")
// var arrayemail=["email11","email2","email13",]

// button7.onclick=function(){
//     arrayemail.push(emaill.value)
//     document.write(arrayemail)
// }
// // ========================8========================
// var mahrozet=document.getElementById("mahrozet")
// var button8=document.getElementById("enter8")
// button8.onclick=function(){
//      mahrozet=( mahrozet.value)
//      document.write(`<p>${mahrozet.length}</p><p>${mahrozet}</p>`)
}
// ========================9========================

// var emaill=document.getElementById("cuntry")
// var emaill=document.getElementById("age0")
// var emaill=document.getElementById("flag0")
// var emaill=document.getElementById("name0")
// var button0=document.getElementById("button0")

button0.onclick=function(){
    var person0={
        cuntry:"Ethiopia",
        flag0:`<p><img src="https://media.istockphoto.com/photos/closeup-of-ruffled-ethiopia-flag-picture-id1031312966?b=1&k=6&m=1031312966&s=170667a&w=0&h=k4cQiqIMCPslVhqoi-Vz-F0fv2JDO4xm0QPVDVzvI2s=" </p>`,
        name0:"gnhjfyg",
        age0:67
    }
    document.write(`${person0.flag0},${person0.cuntry},${person0.name0},${person0.age0}<br>`)







