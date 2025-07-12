import { DateTime } from "luxon";

export function formattedDate(input: Date | string, showTime: boolean): string {
	const date = checkDate(input);

	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "2-digit",
	};

	if (showTime) {
		options.hour = "2-digit";
		options.minute = "2-digit";
	}

	return date.toLocaleString("en-GB", options);
}

export function isoDate(input: Date | string): string {
	const date = checkDate(input);
	return date.toISOString();
}

// converts a date from the Ghost content API into a JS Date for processing
export function ghostDate(input: string): Date {
	return DateTime.fromISO(input).toJSDate(); // is this the ONLY reason that luxon is in
}

// error prevention
function checkDate(input: string | Date): Date {
	if (typeof input === "string") {
		return convertStringToDate(input);
	} else {
		return input;
	}
}

function convertStringToDate(input: string): Date {
	return new globalThis.Date(input);
}
