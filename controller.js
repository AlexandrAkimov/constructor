$('.btn-for-el').click(function() {
	const idx = $(this).index('.btn-for-el')
	$('.add-el-block').hide()
	$('.add-el-block').eq(idx).show()
})

$('.btn-attach').click(function() {
	globalId.pop()
	if (globalId.length === 1) {
		$(this).hide()
		$('.snackbar-attach-text').text(`${globalId[globalId.length -1].type}`)
	} else {
		$('.snackbar-attach-text').text(`${globalId[globalId.length -1].type} - ${globalId[globalId.length -1].title}`)
	}
	
})


