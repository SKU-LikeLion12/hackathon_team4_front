import {http, HttpResponse} from "msw";

export const handlers = [
	http.get("/todos", () => {
		return HttpResponse.json({
			id: "todos",
			title: "i am a boy",
		});
	}),
	http.post("/guardianLogin", async ({request}) => {
		const news = await request.json();
		console.log(news);

		if (news.id === "eunah" && news.pwd === "1111") {
			return HttpResponse.json(
				"1wkjehanfnjqgu1j112as235123"
			);
		}
	}),

	http.post("/login", async ({request}) => {
		const news = await request.json();
		console.log(news);

		if (news.uniqueKey === "1111") {
			return HttpResponse.json(
				"1wkjehanfnjqgu1j112as235123"
			);
		}
	}),
];
