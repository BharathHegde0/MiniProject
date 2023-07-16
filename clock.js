const hour = document.getElementById("clock-hours");
const min = document.getElementById("clock-minutes");
const sec = document.getElementById("clock-seconds");
const ampm = document.getElementById("clock-ampm");

function updateTime() {
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	let a = "AM";

	if (h > 12) {
		h = h - 12;
		a = "PM";
	}

	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	if (s < 10) {
		s = "0" + s;
	}

	hour.innerText = h;
	min.innerText = m;
	sec.innerText = s;
	ampm.innerText = a;

	setTimeout(() => {
		updateTime();
	}, 1000);
}

updateTime();
