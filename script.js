
function setAsnwer() {
	let answer;
	let result = '';
	// Добавляю переменую которая ведет количество итераций по циклу
	let counter = 1;

	while (true) {
		//Добавляю вычисление результатом которого является каждый 3 проход по циклу
		//если да спрашиваю "Продолжить ли?", если нет - выхожу из цикла
		if (counter % 3 === 0) {
			const question = confirm('Do you want to continue?');
			if (question === false) break;
		}

		answer = prompt('Write your message');;
		result += `${answer} `;
		console.log(result);

		if (answer === 'exit') break;

		counter++;
	}
}

setAsnwer();
