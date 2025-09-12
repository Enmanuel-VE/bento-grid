import IllustrationForSchedule from "../assets/images/illustration-schedule-posts.webp";

function ItemFive(): HTMLElement {
	const item = document.createElement("article");
	item.id = "item-5";
	item.className =
		"flex flex-col bg-[#DCD1FC] rounded-xl p-6 lg:p-4 gap-4 justify-center";
	item.innerHTML = /*html*/ `
		<div class="flex flex-col items-center lg:py-3 lg:items-start gap-3 lg:h-full lg:justify-evenly">
	 		<p class="text-center text-2xl lg:text-[clamp(1.5rem,2vw,3.5rem)] font-bold lg:text-left">
				Schedule to social media.
			</p>

			<img 
				class="lg:aspect-[16/9] lg:h-full lg:w-full lg:transform lg:translate-x-[40%]" 
				loading="lazy" 
				src="${IllustrationForSchedule}" 
				alt="Illustration of scheduling posts"
			/>

			<p class="text-center lg:text-left font-medium text-lg p-4 lg:p-0 text-[#524B5E] lg:text-[clamp(0.5rem,1.5vw,1rem)]">
				Optimize post timings to publish content at the perfect time for your audience.
			</p>
		</div>
	`.trim();
	return item;
}

export default ItemFive();
