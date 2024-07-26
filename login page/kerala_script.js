document.addEventListener("DOMContentLoaded", function () {
	const animatedClasses = [
	  "state_name",
	  "state_map",
	  "temp1",
	  "temp2",
	  "temp3",
	  "temp4",
	  "temp5",
	  "temp6",
	  "temp7",
	  "temp8"
	];
	function checkVisibility() {
	  animatedClasses.forEach((className) => {
		const elements = document.querySelectorAll(`.${className}`);
		elements.forEach((element) => {
		  const rect = element.getBoundingClientRect();
		  const windowHeight =
			window.innerHeight || document.documentElement.clientHeight;

		  if (rect.top <= windowHeight) {
			element.classList.add("visible");
		  }
		});
	  });
	}

	window.addEventListener("scroll", checkVisibility);
	checkVisibility();
  });