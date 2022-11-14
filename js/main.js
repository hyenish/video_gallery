const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = document.querySelector("aside span");

for (let el of items) {
	//article에 hover가 되었을때 동영상이 play
	el.addEventListener("mouseenter", (e) => {
		e.currentTarget.querySelector("video").play();
	});

	el.addEventListener("mouseleave", (e) => {
		e.currentTarget.querySelector("video").pause();
	});

	//article을 클릭하면 aside가 튀어나옴
	el.addEventListener("click", (e) => {
		let title = e.currentTarget.querySelector("h2").innerText;
		let txt = e.currentTarget.querySelector("p").innerText;
		let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

		aside.querySelector("h2").innerText = title;
		aside.querySelector("p").innerText = txt;
		aside.querySelector("video").setAttribute("src", vidSrc);
		aside.querySelector("video").play();

		aside.classList.add("on");
	});
} //for문 끝

//aside안의 close버튼을 킄릭하면  aside가 들어감
close.addEventListener("click", () => {
	aside.classList.remove("on");
	aside.querySelector("video").pause();
});
