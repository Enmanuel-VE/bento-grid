import ImageFiveStars from "../assets/images/illustration-five-stars.webp";

function itemEight() {
	const item = document.createElement("div");
	item.id = "item-8";
	item.className = `flex flex-col gap-8 bg-[#7651DC] p-9 rounded-xl justify-center md:col-start-2 md:row-start-1 md:col-span-2`;

	item.innerHTML = /*html*/ `
		<p class="text-5xl font-medium text-white text-center">
			Social Media <br />
			<span class="text-[#FDCD67]">10x</span>
			<span class="italic">Faster</span>
		    <br />
			with AI
		</p>

		<figure class="flex flex-col gap-1 items-center">
			<img
				loading="lazy"
				src="${ImageFiveStars}"
				alt="Illustration of five stars"
				class="w-[70%]"
			/>
			<figcaption class="text-xl text-white">
				Over 4,000 5-star reviews
			</figcaption>
		</figure>
		`.trim();

	return item;
}

export default itemEight();
