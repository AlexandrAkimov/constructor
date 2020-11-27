$('#btn-submit-text').click(function() {
	const options = {
		type: 'текст',
		id: Date.now(),
		textcontent: $('#textarea').val(),
		tagname: 'span'
	}
	createEl(Element, options)
})

$('#btn-submit-arr').click(function() {
	const options = {
		id: Date.now(),
		type: 'свернутый раздел',
		textcontent: $('#p-arr').val(),
		tagname: 'p',
		classname: 'arr'
	}
	createEl(ParArrow, options)
})


$('#btn-submit-btn').click(function(){
	const options = {
		id: Date.now(),
		textcontent: $('#btn-name').val()
	}
	btns.push(options)

	if(+$('#btn-num').val() === btns.length) {
		createEl(Btn, btns)
		btns.length = 0
	}
})

$('#btn-submit-case').click(function(){
	const options = {
		id: Date.now(),
		textcontent: $('#case-name').val()
	}
	btns.push(options)

	if(+$('#case-num').val() === btns.length) {
		createEl(Case, btns)
		btns.length = 0
	}
})

$('.btn-enter').click(function() {
	const options = {
		id: Date.now(),
		type: 'отступ'
	}
	const enter = new Element(options)
	enter.addEnter()
})
function createEl(modelEl, options) {
	const elem = new modelEl(options)
	elem.addToHTML()
	
}


