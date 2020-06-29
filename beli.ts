function kumpi () {
    return Math.randomBoolean() ? 'vasen' : 'oikea'
}

function vihjaa (k: string) {
    if (k == "vasen") {
        valotaSarake(0)
    } else {
        valotaSarake(4)
    }
}

function valotaSarake (s: number) {
    for (let rivi = 0; rivi <= 4; rivi++) {
        led.plot(s, rivi)
    }
}

function tarkastaPainallus(nappi: Button) {
    if (vihjeet.get(0) == 'vasen' && nappi == Button.A) {
        vihjeet.removeAt(0)
        pisteet++
        return
    }
    if (vihjeet.get(0) == 'oikea' && nappi == Button.B) {
        vihjeet.removeAt(0)
        pisteet++
        return
    }
    erhe = true
}

input.onButtonPressed(Button.A, function () {
    tarkastaPainallus(Button.A)
})
input.onButtonPressed(Button.B, function () {
    tarkastaPainallus(Button.B)
})

let pisteet = 0
let vihjeet: string[] = []
let erhe = false
let nopeus = 1400
basic.showIcon(IconNames.Heart)
basic.pause(200)
basic.clearScreen()
while (!erhe) {
    let k = kumpi()
    vihjeet.push(k)
    vihjaa(k)
    basic.pause(0.8 * nopeus)
    basic.clearScreen()
    basic.pause(0.2 * nopeus)
    nopeus = nopeus * 0.95
}
vihjeet = []
while (true) {
    basic.showString(pisteet + '!')
}
