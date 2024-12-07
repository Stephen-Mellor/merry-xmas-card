import { stringToBase64 } from "../../utils/string";

export async function GET({ params, request }: { params: { name: string }; request: Request }) {
	return new Response(`${new URL(request.url).origin}?n=${stringToBase64(params.name)}`);
}
