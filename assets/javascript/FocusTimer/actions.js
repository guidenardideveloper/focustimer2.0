import state from './state.js'
import * as timer from './timer.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()
}

export function stop() {
    state.isRunning = false
    timer.updateDisplay()
}

export function toIncrease() {
    state.minutes += 5
    timer.updateDisplay()
}

export function toDecrease() {
    state.minutes -= 5
    timer.updateDisplay()
}

export function toggleMusic() {
    state.isMute = false
    player.playSound()
}
