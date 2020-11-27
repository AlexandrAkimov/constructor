class Btn extends Element {
	constructor(attributesEl) {
		super(attributesEl)
		this.options = attributesEl
		this.type = 'кнопка'
	}

	addToHTML() {
		$(`#${globalId[globalId.length - 1].id}`).append(`<div class="controls"></div>`)
		
		const globBtnsId = [];
		const controls = $('.controls')
		this.options.forEach((btn, idx) => {
			$([...controls][controls.length - 1]).append(`<button class="btn btn${controls.length}" id="${btn.id}">${btn.textcontent}</button>`)
			$(`#${globalId[globalId.length - 1].id}`).append(`
				<div id="${btn.id + 1}" class="btn_text${controls.length}"></div>
			`)
			this.createElemId(btn.id)
			this.createElemId(btn.id + 1)

			globBtnsId.push({id: btn.id + 1, title: btn.textcontent, type: this.type})
		})
		globalId = [...globalId, ...globBtnsId.reverse()]

		this.enableSnackbar(globalId[globalId.length - 1].title)
	}
}