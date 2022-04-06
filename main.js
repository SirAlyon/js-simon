let numbers 
let userNumbers 

const generate = document.getElementById('generate').addEventListener('click', function(){
    document.querySelector('.numbers').innerHTML = ""
    numbers = []

    for (let i=0; i < 5; i++){ //ciclo per generare 5 numeri
        const number = Math.floor(Math.random() * 100)
        if (!numbers.includes(number)){
            numbers.push(number) 
         } else {
             i--
         }
    }

    console.log(numbers);
    document.querySelector('.numbers').insertAdjacentHTML('beforeend', numbers) 
    return numbers
})

const start = document.getElementById('start').addEventListener('click', function(){
    document.querySelector('.numbers').innerHTML = ""
    setTimeout(timer, 30000)
})

const verify = document.getElementById('verifica').addEventListener('click', function(){
    let correctNumbers = []
    for (let i=0; i < 5; i++){
        let userNumber = userNumbers[i]  
        if (numbers.includes(userNumber)){
            correctNumbers.push(userNumber)
        }
        
    }
    console.log(`Hai indovinato ${correctNumbers.length} numeri!`)
    if (correctNumbers.length !== 0){
       console.log(`I numeri che hai indovinato sono ${correctNumbers}`); 
    }
    
})



function timer() {
    userNumbers = []
    while (userNumbers.length < 5){
        let userNumber = Number(prompt('Inserisci un numero:'))
        userNumbers.push(userNumber)
    }
    console.log(userNumbers);
    return userNumbers
}

