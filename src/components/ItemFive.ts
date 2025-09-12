import IllustrationForSchedule from "../assets/images/illustration-schedule-posts.webp";

function ItemFive() {
	const item = document.createElement("div");
	item.id = "item-5";
	item.className =
		"flex flex-col bg-[#DCD1FC] rounded-xl p-6 md:p-4 gap-4 justify-center";
	item.innerHTML = /*html*/ `
		<div class="flex flex-col items-center md:py-3 md:items-start gap-3 md:h-full md:justify-evenly">
	 		<p class="text-center text-2xl md:text-[clamp(1.5rem,2vw,3.5rem)] font-bold md:text-left">
				Schedule to social media.
			</p>

			<img 
				class="md:aspect-[715/638] md:object-scale-down md:scale-125 md:h-full md:transform md:translate-x-[50%]" 
				loading="lazy" 
				src="${IllustrationForSchedule}" 
				alt="Illustration of scheduling posts"
			/>

			<p class="text-center md:text-left font-medium text-lg p-4 md:p-0 text-[#524B5E] md:text-[clamp(0.25rem,1.5vw,0.75rem)]">
				Optimize post timings to publish content at the perfect time for your audience.
			</p>
		</div>
	`.trim();
	return item;
}

export default ItemFive();
