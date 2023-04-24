let tool = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (tool == 0) {
        basic.showIcon(IconNames.Square)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.Square)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
basic.forever(function () {
    radio.setGroup(69)
})
