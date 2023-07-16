window.addEventListener("load", () => {
	const draggable = document.querySelectorAll(".draggable");
	const containers = document.querySelectorAll(".tasks-board");

	//To see if the Element is being dragged
	draggable.forEach((draggable) => {
		draggable.addEventListener("dragstart", () => {
			draggable.classList.add("dragging");
		});

		draggable.addEventListener("dragend", () => {
			draggable.classList.remove("dragging");
		});
	});

	//To check if where the Element is being dragged
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

	function getDragAfterElement(container, y) {
		const draggable_elements = Array.from(
			container.querySelectorAll(".draggable:not(.dragging)")
		);

		return draggable_elements.reduce(
			(closest, child) => {
				const box = child.getBoundingClientRect();
				const offset = y - box.top - box.height / 2;
				if (offset < 0 && offset > closest.offset) {
					return { offest: offset, element: child };
				} else {
					return closest;
				}
			},
			{ offset: Number.NEGATIVE_INFINITY }
		).element;
	}
});
