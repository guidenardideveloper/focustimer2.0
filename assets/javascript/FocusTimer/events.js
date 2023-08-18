import * as element from "./elements.js"
import * as actions from './actions.js'
import * as sounds from './sounds.js'

export function registerControls() {
        element.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action] != 'function') {
            return
        }
        actions[action]()
    })
}

export function registerPlay() {
    element.buttonSounds[0].addEventListener('click', (event) => {
        event.target.classList.toggle('active')
        if (event.target.classList.contains('active')) {
            sounds.forestAudio.play()
        } else {
            sounds.forestAudio.pause()
        }
    })
    element.buttonSounds[1].addEventListener('click', (event) => {
        event.target.classList.toggle('active')
        if (event.target.classList.contains('active')) {
            sounds.rainAudio.play()
        } else {
            sounds.rainAudio.pause()
        }
    })
    element.buttonSounds[2].addEventListener('click', (event) => {
        event.target.classList.toggle('active')
        if (event.target.classList.contains('active')) {
            sounds.coffeshopAudio.play()
        } else {
            sounds.coffeshopAudio.pause()
        }
    })
    element.buttonSounds[3].addEventListener('click', (event) => {
        event.target.classList.toggle('active')
        if (event.target.classList.contains('active')) {
            sounds.fireplaceAudio.play()
        } else {
            sounds.fireplaceAudio.pause()
        }
    })
}
