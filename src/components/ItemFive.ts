import IllustrationForSchedule from "../assets/images/illustration-schedule-posts.webp";

function ItemFive() {
	const item = document.createElement("div");
	item.id = "item-5";
	item.className =
		"flex flex-col bg-[#DCD1FC] rounded-xl p-6 gap-4 justify-center md:col-start-4 md:row-start-1";
	item.innerHTML = /*html*/ `
	 	<p class="text-center text-2xl font-medium p-4">Schedule to social media.</p>
		<figure class="flex flex-col items-center">
			<img loading="lazy" src="${IllustrationForSchedule}" alt="Illustration of scheduling posts">
			<figcaption class="text-center font-medium text-lg p-4 text-[#524B5E]">
				Optimize post timings to publish content at the perfect time for your audience.
			</figcaption>
		</figure>
	`.trim();
	return item;
}

export default ItemFive();
