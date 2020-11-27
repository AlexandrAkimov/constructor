class Case extends Element {
	constructor(attributesEl) {
		super(attributesEl)
		this.options = attributesEl
		this.type = 'основной кейс'
	}

	addToHTML() {
		$(`#${globalId[globalId.length - 1].id}`).append(`<div class="tabs"></div>`)
		
		const globBtnsId = []
		this.options.forEach((tab, idx) => {
			
			$('.tabs').append(`<div id="${tab.id}" class="tab ${!idx ? 'active' : ''}">
					${tab.textcontent}
					<span class="border" ${!idx ? 'style: "width: 100%;"': ''}>
				</div>`
			)
			
			
			$(`#${globalId[globalId.length - 1].id}`).append(`
				<div id="${tab.id + 1}" class="panel1" ${!idx ? 'style: "display: block;"': ''}></div>
			`)
			this.createElemId(tab.id)
			this.createElemId(tab.id + 1)

			globBtnsId.push({id: tab.id + 1, title: tab.textcontent, type: this.type})
		})
		globalId = [...globalId, ...globBtnsId.reverse()]

		this.enableSnackbar(globalId[globalId.length - 1].title)
	}
}