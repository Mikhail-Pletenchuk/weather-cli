import { homedir } from 'os';
import { basename, dirname, extname, isAbsolute, join, relative, resolve, sep } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

export async function saveKeyValue(key, value) {
	/*
	console.log(basename(filePath)); // weather-data.json
	console.log(dirname(filePath)); // C:\Users\Mik
	console.log(extname(filePath)); // .json
	console.log(relative(filePath, dirname(filePath))); // ..
	console.log(isAbsolute(filePath)); // true
	console.log(resolve('..')); // F:\Work\www
	console.log(sep); // \
	*/

	let data = {};
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		data = JSON.parse(file);
	}

	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
}

export async function getKeyValue(key) {
	if (await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		const data = JSON.parse(file);
		return data[key];
	}

	return undefined;
}

async function isExist(path) {
	try {
		await promises.stat(path);
		return true;
	} catch (error) {
		return false;
	}
}
