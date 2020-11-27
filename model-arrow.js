class ParArrow extends Element {
	constructor(attributesEl) {
		super(attributesEl)
	}

	addToHTML() {
		document.getElementById(globalId[globalId.length - 1].id).innerHTML += 
			`<${this.tagname} 
				id="${this.id}"
				${this.classname ? `class="${this.classname}"` : ''}
			>
				<u>${this.textcontent}</u>
				<i class="material-icons">chevron_right</i>
			</${this.tagname}>
			<div id="${this.id+1}" class="arr_text"></div>`
			globalId.push({id: (this.id + 1).toString(), type: 'свернутый раздел', title: this.textcontent})
			this.enableSnackbar()
			this.createElemId(this.id)
			this.createElemId(this.id + 1)
	}
}