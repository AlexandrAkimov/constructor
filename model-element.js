class Element {
	constructor(attributesEl) {
		this.type = attributesEl.type
		this.id = attributesEl.id
		this.tagname = attributesEl.tagname
		this.textcontent = attributesEl.textcontent
		this.classname = attributesEl.classname
	}
	addEnter() {
		$(`#${globalId[globalId.length - 1].id}`).append(`<br id="${this.id}">`)
		this.createElemId(this.id)
	}
	createElemId(id) {
		$('#sidebar-list').append(`<p class="${id}">${this.type}#${id}</p>`)
		$(`.${id}`).hover(function(e) { 
    		$(`#${id}`).css("background-color", e.type === "mouseenter" ? "red" : "transparent") 
		})
		$(`.${id}`).contextmenu(function() {
			const isDelete = confirm('Вы желаете удалить элемент?')
			if(isDelete) {
				$(this).remove()
				$(`#${id}`).remove()
			}
		})	
	}
	addToHTML() {
		$(`#${globalId[globalId.length - 1].id}`).append( 
			`<${this.tagname} 
				id="${this.id}"
				${this.classname ? `class="${this.classname}"` : ''}
			>
				${this.textcontent}
			</${this.tagname}>`)
			this.createElemId(this.id)
		
	}

	enableSnackbar(text) {
		if(globalId.length > 1) {
			$('.btn-attach').show()
			$('.snackbar-attach-text').text(`${this.type} - ${text ? text : this.textcontent}`)
		}
	}
}
