import chalk from 'chalk';
import dedent from 'dedent-js';

export function printError(error) {
	console.log(`${chalk.bgRed(' ERROR ')} ${error}`);
}

export function printSuccess(message) {
	console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`);
}

export function printHelp() {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		Без параметров - вывод погоды
		-h для вывода помощи
		-s [CITY] для установки города
		-t [API_KEY] для сохранения токена
	`
	);
}
