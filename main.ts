input.onButtonPressed(Button.A, function () {
    tool = 0
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
input.onButtonPressed(Button.AB, function () {
    tool = 2
})
radio.onReceivedString(function (receivedString) {
    if (tool == 0) {
        basic.showIcon(IconNames.Square)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onButtonPressed(Button.B, function () {
    tool = 1
})
let tool = 0
radio.setGroup(69)
basic.forever(function () {
	
})
