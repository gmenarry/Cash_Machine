// // var str = 'All Around the world'

// // console.log(str.substring(1, 3));

// // console.log(str.sunstring(2));

// // console.log("All Around the world".toUpperCase().charAt(7));

// let numberOne = 10
// let numberTwo = 3
// // numberOne += numberTwo

// // console.log(numberOne)

// // console.log(numberTwo)
// console.log("Hello")
// // numberTwo
// numberOne --
// console.log(numberOne)
// numberOne *= numberTwo
// console.log(numberOne)

// let name = "Georgia"
// let age = 21
// // = 21
// console.log(name)
// console.log(`Hello, ${name}. How are you? Oh, you are ${age}`)
// console.log(`Hello, ${name}. How are you?`)

// let Weather = 'cheese'
// if (Weather == 'rain'){
//     console.log('I am taking the bus')
// } 
// else if (Weather == 'cheese'){
//     console.log('i am not walking i am scared of cheese')
// }
//     // console.log('i am walking')
// // }

// let name = 44
// if (name === '44'){
//     console.log('hello')
// }
// else {
//     console.log('goodbye')
// }

// let Weather = 'Sunny'
// if(Weather == 'Sunny'){
//     console.log(`i will walk, because it is ${Weather}`)
// }
// else if(Weather == 'raining'){
//     console.log(`i will drive, because it is ${Weather}`)
// }



// if (1 !== '1'){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let age = 17
// if(age <= 17){
//     console.log(`you are not old enough`)
// }
// else {

//     console.log(`go get hammered btch, youre ${age}`)
// }

// // let place = 'UK'
// let age = 21
// if(place == 'UK' && age >=18){
//     console.log(`great, you have passed`)
// }   
// else if(age <18 && place == 'UK')
// {console.log('sorry you have not passed')
// }
// else{console.log('sorry, i am not sure')}

// let day = 'Saturday'
// if (day == 'Saturday' || day == 'Sunday')
// console.log('wipptey do')

// if (true || false) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// let favtopp = 'olive'
// switch(favtopp){
//     case 'cheese':
//     case 'chicken':
//     console.log('plenty please')
//     break;
//     case 'olive':
//         console.log('ew!')
//     break;
//     case 'pepperoni' :
//         console.log('the hotter the better')
//     break;
//     default:
//         console.log('bad choices')
//     if(favtopp = 'mushroom'){
//         console.log(`youve made a mistake, ${favtopp} is not an option`)
// //     }

// let password = 'pass'
// if(password.length < 8){
//     console.log('this password is too short')
// }
// else {
//     console.log(`your password ${password} has been stored`)
// }

// let num = 2

// switch(num){
//     case (num % 3 == 0 && num % 5 == 0):
//     console.log('fizzbuzz')
//     break;
//     case(num % 3 == 0): {
//         console.log('buzz')
//     }
//     case(num % 5 == 0): {
//         console.log('fizz'):

// let num  = 109
// let stringnum = num.toString()
// console.log(stringnum)
// let reversenumber = stringnum.split(/(?:)/u).reverse().join('')
// console.log(reversenumber)
// if (stringnum === reversenumber){
//     console.log("this is a palindrome")
// }
// else {
//     console.log('this is not a palindrome')
// }

// let age = 18
// let child = 8
// let adult = 10.95
// let senior = 7.50
// if(age <= 17){
//     console.log(`because you are ${age}, the price for your ticket is £${child}`)
// }else if (age <60){
//     console.log(`because you are ${age}, your ticket price is £${adult}`)
// }else if (age >60){
//     console.log(`because you are ${age}, your ticket price is £${senior}`)
// }
// else{
//     console.log('this does not look like an age, please try again')
// }



// const veryLongSentanceAboutCinemaTickets = (age) => {

//     console.log(`your age is ${age}`)
//     if(age <18){
//         console.log('your price is 7.50')
//     }
//     else{
//         console.log('full price for you')
//     }
    
// }
//     veryLongSentanceAboutCinemaTickets(17);
//     veryLongSentanceAboutCinemaTickets(40);
//     veryLongSentanceAboutCinemaTickets(65)
// let size = 'Large'
// let typeOfDrink = 'latte'


// const drinkOrder = (size, typeOfDrink) => {
//     console.log(`i have made you a ${typeOfDrink} in a ${size}`)
//     if(size == 'large'){
//         console.log('this will cost you £7.50')
//     }
    
// }

// drinkOrder('large', 'latte')

// const addUp = (num1, num2) => {
//     return num1 + num2;
//     }
    
//     addUp(7,3);
//     console.log(addUp(2,5));

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
//     };
    
//     const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
//     };
    
//     console.log("The temperature is " + getFahrenheit(3) + "°F");
//     console.log("The temperature is " + getFahrenheit(6) + "°F");
//     console.log("The temperature is " + multiplyByNineFifths(6) + "°F");

// function square(number) {
//     return number * number;
// }
// console.log('the answer is' + square())

// const factorial = (n) => {
//     if((n === 0) || (n ===1)){
//         return 1;
//     }else {
//         return(n * factorial(n-1))
//     }
    
// }
// console.log(factorial(33));

// let orderCount = 0; 

// const takeOrder = (topping, size) => {
//     console.log(`pizza with ${topping} and ${size}`)
//     orderCount++;
//     console.log(orderCount)
// }
// takeOrder('pineapple', 'large')
// takeOrder('pin', 'lar')
// takeOrder('pineple', 'lage')

// const answer = (num1, num2) => {
//     return num1*num2
// }
// console.log(answer(5, 3))
// console.log(answer(5, 3))
// console.log(answer(5, 3))

// let coffeeOrder = [
//     'Alex - Cortado',
//     'Ben - Cortado',
//     'Charlie - Whatevers new'
// ]
// console.log(coffeeOrder)

// let myFaveSongs = [
//     "snakeEyes - Mumford",
//     "september - earth wind and fire",
//     "sultans of swing - dire striats",
// ]
// console.log(myFaveSongs)
// myFaveSongs.push("abc")
// myFaveSongs.push("even more bangers")
// myFaveSongs.pop();
// console.log('more', myFaveSongs)

// let faveWebsites = [
//     "Youtube",
//     "Amazon",
//     "Any clothes website",
// ]
// console.log(faveWebsites)
// faveWebsites.push("ABC")
// faveWebsites.push("123")
// console.log("more", faveWebsites)

// let favesites = [
//     'ABC',
//     '123',
// ]
// console.log(favesites)
// favesites.push('QWERTY')
// console.log('more', favesites)

// let goodsites = [
//     'ABC',
//     '1234',
// ]
// console.log(goodsites)
// goodsites.push('more sites')
// console.log('more', goodsites)

// let greatsites = [
//     'ABC',
//     '123',
// ]
// greatsites.shift('ABC')
// console.log(greatsites)

// let greatsites = [
//     'ABC',
//     '123',
// ]
// greatsites.unshift('ABC')
// console.log(greatsites)

// let greatsites = [
//     'ABC',
//     '123',
//     '1234'
// ]
// greatsites.splice(2,1, '123')
// console.log(greatsites)

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);

// months.splice(0,4, 'May')
// console.log(months)

// let num = 2002
// let stringNumber = num.toString()
// let reverseNumber = stringNumber.split(/(?:)/).reverse().join("")

// if(stringNumber === reverseNumber) {
//     console.log("This is a palindrome")
// } 
// else {
//     console.log("This is not a palindrome")
// }



// const mySub = (toppingOne, toppingTwo, toppingThree, toppingFour, toppingFive)=>{
//     console.log(`Thank you for ordering, your pizza will consist of ${toppingOne}, ${toppingTwo}, ${toppingThree}, ${toppingFour}, ${toppingFive}`)
// }
// mySub("Pepperoni", "Chicken", "Peppers", "Sweetcorn", "& Olive oil.")

// const faveDrink = ['Coffee', 'Tea', 'Water']
// faveDrink.splice(0,0, 'Coca Cola' )
//     console.log(faveDrink)

// for (i = 9; i > -1; i-- ){
//     console.log(i);
//     }

// let favouriteDrinks = [
//     "Coke",
//     "Fanta",
//     "Tonic",
//     "Red Bull"
//     ];
//     for(let i=0; i<favouriteDrinks.length; i++){
//     console.log(favouriteDrinks[i]);
//     }

// let favFilm = [
//     "Film1",
//     "Film2",
//     "Film3",
//     "Film4"
// ]
// for(let i=0; i<favFilm.length; i++){
//     console.log(favFilm[i])
// }


// // let films = [
// //     "1",
// //     "2",
// //     "3",
// //     "4",
// // ]
// // for(i=0; i<films.length; i++){
// //     console.log(films[i])
// // }

// let drinks = [
//     "1",
//     "2",
//     "3"
// ]
// drinks.push('i hope this doesnt print loads')

// for(i=0; i<drinks.length; i++){
//     console.log(drinks[i])
// }

// let storedFilms = ["Corrie", "HSM", "White Chicks", "Gostbusters",];

// for(let i=0; i<storedFilms.length; i++){
//     console.log(storedFilms[i])
// }

// const filmCheck = () => {
//     if(storedFilms[1] == "Gostbusters") {
//     console.log("Yay")
//     }
//     else{
//         console.log ("Uh oh.")
//     }
// }
// filmCheck()
    
// let time = "1700"
// let placeOfWork = "Manchester"
// let townOfHome = "Wigan"

// if(time == "0700"){
//     console.log(`It's ${time}! of course i am in ${townOfHome}, silly!`)
// }
// else if (time == "0800") {
//     console.log(`It's time to set off for work. Make your way to ${placeOfWork} before rush hour.`)
// }
// else if (time == "0900"){
//     console.log(`It's ${time}, I am now in work.`)
// }
// else if (time == "1700"){
//     console.log(`My favourite time of day is ${time}, because i get to go back to ${townOfHome}.`)
// }

// let time = "5"
// let placeOfWork = "Manchester"
// let townOfHome = "Wigan"


// if(time > 0000 && time <=0759){
//     console.log(`I'm at home in ${townOfHome}`)
// }
// else if(time >=0800 && time <= 0959){
//     console.log(`I am now on my way to work in ${placeOfWork}`)
// }
// else if(time >=0900 && time <= 1659){
//     console.log("Currently at work.")
// }
// else if(time >=1700){
//     console.log("It's time to finish work and head home")
// }
// else{
//     console.log("Please enter the time in a 24hour format i.e 0700 for 7am")
// }

// let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
// let timeOfDay = 0900
// let currentDay = "Tuesday"

// while(currentDay == "Monday" || currentDay == "Tuesday" || currentDay == "Wednesday" || currentDay == "Thursday" || currentDay == "Thursday" && timeOfDay >=0000 && timeOfDay <0801){
//     console.log("The heating is off")
//     currentDay =  dayOfWeek[Math.floor(Math.random) * 5]
// }
// while(currentDay == "Monday" || currentDay == "Tuesday" || currentDay == "Wednesday" || currentDay == "Thursday" || currentDay == "Thursday" && timeOfDay >0800 && timeOfDay <0930){
//     console.log("The heating is on")
//     currentDay =  dayOfWeek[Math.floor(Math.random) * 5]
// }

// let randomNum = (10)
// console.log(Math.random()* 10)

// console.log(Math.floor(Math.random()* 10))
// console.log(Math.floor(Math.random()* 10))
// console.log(Math.floor(Math.random()* 10))
// console.log(Math.floor(Math.random()* 10))
// console.log(Math.floor(Math.random()* 10))

// console.log("testing sentance to see what happens".toUpperCase(2))

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//     "Cappuccino",
//     "Latte",
//     "Filter coffee",
//     "Tea",
//     "Hot chocolate"
//     ]

//     // // ^^^ name is the key whitesheep is the value 

const dataChecker = (string, rank) => {
    if(string == "Codenation" && rank == 1){
    console.log("Both are correct")
}else if (string == "Codenation" && rank != 1){
    console.log( `The ${string} & ${rank} are both different `)
}
else if (string != "Codenation" && rank == 1){
    console.log("Wrong")
}
else ("Try Again!")
}
dataChecker("Codenation", 1)
dataChecker("Codenation", 1)

