import ImageFiveStars from "../assets/images/illustration-five-stars.webp";

function itemEight(): HTMLElement {
	const item = document.createElement("article");
	item.id = "item-8";
	item.className = `
		flex flex-col gap-8 bg-[#7651DC] p-9 rounded-xl justify-center lg:items-center lg:p-3 
	`;

	item.innerHTML = /*html*/ `
		<p class="text-5xl lg:text-[clamp(1.5rem,3vw,3.5rem)] lg:max-w-[80%] font-medium text-white text-center">
			Social Media 
			<span class="text-[#FDCD67]">10x</span>
			<span class="italic">Faster</span>
			with AI
		</p>

		<figure class="flex flex-col gap-1 items-center lg:max-w-[80%]">
			<img
				loading="lazy"
				src="${ImageFiveStars}"
				alt="Illustration of five stars"
				class="w-[70%] lg:w-[40%]"
			/>
			<figcaption class="text-xl text-white text-center lg:text-[clamp(0.5rem,2vw,1rem)]">
				Over 4,000 5-star reviews
			</figcaption>
		</figure>
		`.trim();

	return item;
}

export default itemEight();
