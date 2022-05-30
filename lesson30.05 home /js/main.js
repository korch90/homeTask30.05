// Завдання 1
// Користувач вводить текст в prompt. Потрібно порахувати і вивести кількість пробілів, які були введені.
// ------------------------------------------------------------------------------------------
// Завдання 2
// Користувач вводить email. Потрібно перевірити дані на правильність введення. Правильно введений email - це той, в якому міститься символ @. Крім того символ @ не може бути на початку тексту або в кінці.
// Приклад правильно введених даних:
// student@ukr.net
// Приклад не правильно введених даних:
// @student.ukr.net
// student.ukr.net@
// student.ukr.net
// ------------------------------------------------------------------------------------------
// Завдання 3
// Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті декілька разів). Потрібно, вивести в консолі загальну кількість слів html у введеному тексті.
// Приклад роботи:
// Користувач вводить: “Text html javascript html css” – в консоль виводиться 2.
// ------------------------------------------------------------------------------------------
// Завдання 4
// Користувач вводить URL адреса в prompt в форматі http або https. Виведіть тільки ім'я домена без префіксів http://, https:// в консолі.
// Приклад роботи:
// Користувач вводить: “https://www.google.com” – в консоль виводиться www.google.com.
// Користувач вводить: “http://www.w3schools.com” – в консоль виводиться w3schools.com.

// Завдання 1

(function ShowSpace(){
    let spaceCount=prompt("enter some text")
    let sum=0
    for(let i=0; i<spaceCount.length;i++){
        if(spaceCount[i]==" "){
            sum++
        }
        else continue
    }
    console.log(sum)
})()

// Завдання 2

(function CorrectMail(){
    let  mail=prompt("write your mail")
    if(mail.includes("@") && mail[0]!=="@" && mail[mail.length-1]!=="@"){
        console.log("mail correct")
    }
    else{
        CorrectMail()
    }
})()


// Завдання 3
(function ShowSum(){
    let str=prompt("write some wich includes 'html'")
    let substr=str.split(" ")
    let su=0
    for(el of substr){
        if(el=="html"){
            su++
        }
    else continue
    }
    console.log(su)
})()

// Завдання 4

let domen
let newDomen

function FixDomen(){

domen=prompt("write your domen")

if(domen.includes("https://")){
    newDomen= domen.slice(8,domen.length-1);
    console.log(newDomen)
}

else if(domen.includes("http://")){
    newDomen= domen.slice(7,domen.length-1)
    console.log(newDomen)
}
else{
    FixDomen()
}
}
FixDomen()

