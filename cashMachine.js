let userBalance = 25
let userPin = 1234
let accountNumber = 987654321
let userInput;

// alert('Please insert card.')

const checkPin = () => {
    userInput = prompt('Please enter your pin.')
    console.log(userInput)
    if (userInput == userPin) {
        optionsScreen()
    }
    else {
        alert('Please retry')
    }
}

const optionsScreen = () => {
    userInput = prompt('Please choose an option \n1: Check Balance \n2: Withdraw Cash \n3: Deposit \n4: Cancel \n5: Change Pin')
    if (userInput == 1) {
        checkBalance()
    }
    else if (userInput == 2) {
        withdrawCash()
    }
    else if (userInput == 3) {
        deposit()
    }
    else if (userInput == 4) {
        cancel()
    }
    else if (userInput == 5) {
        changePin()
    }
    else {
        alert('WTF')
    }
}

const withdrawCash = () => {
    userInput = prompt('How much woulkd you like to withdraw?')
    if (userInput <= userBalance) {
        alert('Your transaction has been approved, your card will be despensed first.')
        userBalance -= userInput
        alert(`Your balance is now £${userBalance}`)

    }
    else {
        userBalance += userInput
        alert('You do not have sufficient funds for this. Please try again')
        optionsScreen()
    }

}

const checkBalance = () => {
    alert(`your balance is £${userBalance}.`)

}

const deposit = () => {
    userInput = prompt('How much would you like to deposit?')
    if (userInput <= 250) {
        userBalance += parseInt(userInput)
        alert(`Thank you for depositing. Your balance is now £${userBalance}.`)
    } else {
        alert('Please try again.')
        optionsScreen()
    }
}

const cancel = () => {
    userInput = prompt('Press # if you would like to cancel')
    if (userInput = '#') {
        alert('Goodbye')
        // prompt('press 6 for more options, alternitively, press any other key.')
        // if (userInput == 6) {
        //     optionsScreen()
        // }
        // else {
        //     alert("goodbye")
        // }
        // from 74 - 80 this just adds more lines to over complicate things !! does work but no need.
    }
}

const changePin = () => {
    userInput = prompt('Please enter new pin.')
    if (userInput >= 0 && userInput.length == 4) {
        alert('Your new pin has been set')
        userPin = parseInt(userInput)
        console.log(userPin)
        optionsScreen()
    } else {
        alert('Please try again')
        changePin()

    }
}
checkPin(1234)

