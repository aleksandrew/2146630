import $ from 'jquery';

$(() => {
	const button = $("#add");
	const textarea = $("#textField");
	const field = $(".main__field");

	button.on('click', () => {
		if (textarea.val() !== '') {
			createdComment();
			textarea.val("");
		}
	})
	
	textarea.keydown(e => {
		if (textarea.val() !== '') {
			if (e.ctrlKey && e.keyCode === 13) {
				createdComment();
				textarea.val("");
			}
		}
	})


	function createdComment() {
		const text = textarea.val();

		const date = new Date();
		const format = new Intl.DateTimeFormat("ru", {
			day: "numeric",
			month: "long",
			year: "numeric"
		});
		const outputDate = format.format(date);
		
		const comment = ($('<div/>', {
			"class": 'comment'
		}));

		comment.appendTo(field);

		comment.html(`
			<div class="comment__top">
				<p class="comment-name">
					Иван Иванов
				</p>
				<p class="comment-date">
					${outputDate}
				</p>
			</div>
			<div class="comment__bottom">
				<div class="comment-field">
					${text}
				</div>
			</div>
			`
		);
	}

})
