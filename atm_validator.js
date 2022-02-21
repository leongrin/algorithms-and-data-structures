function validatePIN(pin) {

    console.log(`+pin.trim().length => ${+pin.trim().length}`)

    if (typeof +pin === 'number') {
        console.log(`${+pin} and ${typeof +pin}`)
        console.log(+pin.trim())
    }

    return (
        !isNaN(+pin) &&
        (pin.length === 6 || pin.length === 4) &&
        pin >= 0 &&
        Number.isInteger(+pin) &&
        !pin.includes('.') &&
        pin.trim().length === pin.length &&
        !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pin)
    );


}


console.log(validatePIN("+111"));








