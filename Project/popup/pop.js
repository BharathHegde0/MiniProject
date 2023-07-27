function preventScroll(e) {
	e.preventDefault();
	e.stopPropagation();

	return false;
}

document.querySelector(".no-scroll").addEventListener("wheel", preventScroll);

document.querySelector("#popup-close").addEventListener("click", () => {
	document.querySelector(".popup-container").classList.remove("no-scroll");
	document.querySelector(".popup-container").classList.add("hide");
});
