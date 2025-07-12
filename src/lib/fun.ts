// all the code for making fun stuff happen
import flavourText from "~/data/flavourtext.json";

function randomiseStrings(input: string[]) {
	return input[Math.floor(Math.random() * input.length)];
}

export function getTitleForHeader() {
	return randomiseStrings(flavourText.titles);
}

// check if it's ivy's birthday at build time
export function isBirthday(): boolean {
	const today = new Date();
	const birthday = new Date(today.getFullYear(), 9, 16); // October 16
	const check =
		today.getMonth() === birthday.getMonth() &&
		today.getDate() === birthday.getDate();
	return check;
}

// https://gnuterrypratchett.com/index.php
export function getClacks(): string {
	const clacks: string[] = [
		"Terry Pratchett",
		"Bram Moolenaar",
		"Alan Turing",
		"Haskell Curry",
		"Brianna Ghey",
		"Anne Sturdivant"
	];
	return clacks.join(", ");
}

export function footerReminders(): string {
	return randomiseStrings(flavourText.footer);
}