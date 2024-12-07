import atob from "atob";
import btoa from "btoa";

export function stringToBase64(input: string): string {
	return btoa(String.fromCodePoint(...new TextEncoder().encode(encodeURIComponent(input))));
}

export function base64ToString(input: string): string {
	return decodeURIComponent(atob(input));
}
