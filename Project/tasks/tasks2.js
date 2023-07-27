window.addEventListener("load", () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector(".tasks");
	const for_but = document.querySelector(".tasks-add-button");

	const LOCAL_STORAGE_KEY = "tasks.list";

	function addDragListeners() {
		const draggable = document.querySelectorAll(".draggable");
		const containers = document.querySelectorAll(".tasks-board");

		draggable.forEach((draggable) => {
			draggable.addEventListener("dragstart", () => {
				draggable.classList.add("dragging");
			});

			draggable.addEventListener("dragend", () => {
				draggable.classList.remove("dragging");
			});
		});

		containers.forEach((container) => {
			container.addEventListener("dragover", (e) => {
				e.preventDefault();
				const afterElement = getDragAfterElement(container, e.clientY);
				const cur_draggable = document.querySelector(".dragging");
				if (afterElement == null) {
					container.appendChild(cur_draggable);
				} else {
					container.insertBefore(cur_draggable, afterElement);
				}
			});
		});

		const delete_button = document.querySelector(".delete");
		delete_button.addEventListener("click", (e) => {
			e.stopPropagation();
			const task_el = e.currentTarget.closest(".tasks-item");
			const im_parent = task_el.parentElement;
			if (im_parent == null) {
				console.log("null");
			} else {
				console.log(im_parent);
				im_parent.removeChild(task_el);
			}
		});
	}

	for_but.addEventListener("click", () => {
		console.log("submit");
		const task = input.value;
		input.value = null;
		if (task == null || task == "") {
			alert("Task Cannot be Empty");
			return;
		}

		const task_el = document.createElement("div");
		task_el.classList.add("tasks-item");
		task_el.classList.add("draggable");
		task_el.setAttribute("draggable", true);

		const task_content_el = document.createElement("div");
		task_content_el.classList.add("content");

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement("input");
		task_input_el.classList.add("task-input-el");
		task_input_el.type = "text";
		task_input_el.value = task;
		task_input_el.setAttribute("autocomplete", "off");
		task_input_el.setAttribute("readonly", "readonly");
		task_input_el.style.width = "98%";
		task_input_el.style.fontSize = "20px";

		task_content_el.appendChild(task_input_el);

		const edit_del_el = document.createElement("div");
		edit_del_el.classList.add("edit-del");

		const edit_button = document.createElement("button");
		edit_button.setAttribute("onClick", "edit()");
		edit_button.innerHTML = '<i class="fa fa-solid fa-pen-to-square"></i>';
		edit_button.addEventListener("click", (e) => {
			e.stopPropagation();
			const task_input_field = task_input_el;
			task_input_field.removeAttribute("readonly");
			task_input_field.focus();
			edit_button.innerHTML = '<i class="fas fa-check"></i>';

			const saveButton = document.createElement("button");
			saveButton.innerHTML = '<i class="fas fa-check"></i>';
			saveButton.addEventListener("click", (e) => {
				e.stopPropagation();
				task_input_field.setAttribute("readonly", "readonly");
				edit_button.innerHTML =
					'<i class="fa fa-solid fa-pen-to-square"></i>';

				edit_del_el.replaceChild(edit_button, saveButton);
			});

			edit_del_el.replaceChild(saveButton, edit_button);
		});

		const delete_button = document.createElement("button");
		delete_button.innerHTML =
			'<i class="fa fa-solid fa-trash icons delete"></i>';

		delete_button.classList.add(".delete");
		delete_button.addEventListener("click", (e) => {
			e.stopPropagation();
			const im_parent = task_el.parentElement;
			console.log(im_parent);
			im_parent.removeChild(task_el);
			// list_el.removeChild(task_el);
		});

		edit_del_el.appendChild(edit_button);
		edit_del_el.appendChild(delete_button);
		task_content_el.appendChild(edit_del_el);

		list_el.appendChild(task_el);

		addDragListeners();
	});

	function getDragAfterElement(container, y) {
		const draggableElements = Array.from(
			container.querySelectorAll(".draggable:not(.dragging)")
		);

		return draggableElements.reduce(
			(closest, child) => {
				const box = child.getBoundingClientRect();
				const offset = y - box.top - box.height / 2;
				if (offset < 0 && offset > closest.offset) {
					return { offset: offset, element: child };
				} else {
					return closest;
				}
			},
			{ offset: Number.NEGATIVE_INFINITY }
		).element;
	}
});
