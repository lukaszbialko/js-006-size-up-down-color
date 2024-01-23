const plusBtn = document.querySelector('.size-up')
const minusBtn = document.querySelector('.size-down')
const colorBtn = document.querySelector('.color')
const text = document.querySelector('.text')
let size = 40

const sizeUp = () => {
	if (size < 70) {
		size += 5
		text.style.fontSize = size + 'px'
	} else {
		return
	}
}

const sizeDown = () => {
	if (size > 20) {
		size -= 5
		text.style.fontSize = size + 'px'
	} else {
		return
	}
}

const color = () => {
	const r = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)
	text.style.color = `rgb(${r}, ${g}, ${b})`
}

plusBtn.addEventListener('click', sizeUp)
minusBtn.addEventListener('click', sizeDown)
colorBtn.addEventListener('click', color)