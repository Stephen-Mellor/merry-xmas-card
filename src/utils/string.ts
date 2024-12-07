import atob from "atob";
import btoa from "btoa";

export function stringToBase64(input: string): string {
	return btoa(String.fromCodePoint(...new TextEncoder().encode(encodeURIComponent(input))));
}

export function base64ToString(input: string): string {
	return decodeURIComponent(atob(input));
}

export async function hash(input: string) {
	return await crypto.subtle.digest("SHA-1", new TextEncoder().encode(input)).then((h) => {
		let hexes = [],
			view = new DataView(h);
		for (let i = 0; i < view.byteLength; i += 4) hexes.push(("00000000" + view.getUint32(i).toString(16)).slice(-8));
		return hexes.join("");
	});
}

export function hexStringToDecimalDigit(input: string) {
	const map: { [key: string]: number } = {
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
		a: 10,
		b: 1,
		c: 2,
		d: 3,
		e: 4,
		f: 5,
	};
	return (
		(map[input.slice(-1)] +
			input
				.slice(0, -1)
				.split("")
				.reduce((total, char) => (total + map[char] * 6) % 10, 0)) %
		10
	);
}
