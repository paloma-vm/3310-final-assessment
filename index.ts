function formatPhone(phoneNumber: any) {
    const phoneString = String(phoneNumber)
    const phoneStringInNumbers = Number(phoneString)
    // check length and check for non-numbers
    if ((phoneString.length === 10) && !isNaN(phoneStringInNumbers)) {
        const formattedPhone: string = `(${phoneString.slice(0, 3)}) ${phoneString.slice(3, 6)}-${phoneString.slice(6)}`
        return formattedPhone
    } else {
        return 'Please enter a 10-digit phone number in the format XXXXXXXXXX'
    }
}

function displayInfo() {
    const data = require('./data.json')
    const stringLib = require("@palomavm/string-lib")
    const D = require("@palomavm/date-library")

    const firstName = stringLib.capitalize(data.first_name)
    const lastName = stringLib.capitalize(data.last_name)
    const make = stringLib.capitalize(data.make)
    const model = stringLib.capitalize(data.model)
    const city = stringLib.capitalize(data.city)
    const customerPhone = formatPhone(data.phone)
    const purchased = new D(data.purchased)
    const purchasedDate = purchased.format('M d, Y')
    const lastPayment = new D(data.lastpayment)
    const lastPaymentDate = lastPayment.when()

    const printOut = console.log(`Customer Information:\n\n${firstName} ${lastName}\n\n${make} ${model}
        \n${purchasedDate}\n\n${lastPaymentDate}\n\n${customerPhone}\n\nCity: ${city}`)

    return printOut
}

displayInfo()

// exports
module.exports.displayInfo = displayInfo;
module.exports.formatPhone = formatPhone;
