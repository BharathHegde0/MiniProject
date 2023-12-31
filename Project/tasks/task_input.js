window.addEventListener("load", () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector(".tasks");
	const for_but = document.querySelector(".tasks-add-button");

	for_but.addEventListener("click", () => {
		console.log("submit");
		const task = input.value;

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

		list_el.appendChild(task_el);
	});
});
