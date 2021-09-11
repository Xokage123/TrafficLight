export const timeLight = {
	red: 10000,
	yellow: 3000,
	green: 15000
}

export const nameScreen = {
	red: 'red',
	yellow: 'yellow',
	green: 'green'
}

export const toggleScreen = (router, route) => {
	let counter;
	switch (route.name) {
		case nameScreen.green:
			localStorage.setItem("colorScrennNow", nameScreen.green);
			counter = setTimeout(() => {
				localStorage.setItem("colorScrennPrev", nameScreen.green);
				router.push({
					name: nameScreen.yellow,
				});
			}, timeLight.green);
			break;
		case nameScreen.red:
			localStorage.setItem("colorScrennNow", nameScreen.red);
			counter = setTimeout(() => {
				localStorage.setItem("colorScrennPrev", nameScreen.red);
				router.push({
					name: nameScreen.yellow,
				});
			}, timeLight.red);
			break;
		case nameScreen.yellow:
			if (localStorage.getItem("colorScrennPrev") === "green") {
				localStorage.setItem("colorScrennNow", nameScreen.yellow);
				counter = setTimeout(() => {
					localStorage.setItem("colorScrennPrev", nameScreen.yellow);
					router.push({
						name: nameScreen.red,
					});
				}, timeLight.yellow);
			} else if (localStorage.getItem("colorScrennPrev") === "red") {
				localStorage.setItem("colorScrennNow", nameScreen.yellow);
				counter = setTimeout(() => {
					localStorage.setItem("colorScrennPrev", nameScreen.yellow);
					router.push({
						name: nameScreen.green,
					});
				}, timeLight.yellow);
			}
			break;
		default:
	}

	return counter
};