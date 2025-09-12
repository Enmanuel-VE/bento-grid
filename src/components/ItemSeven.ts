import ImageMultiplePlatforms from "../assets/images/illustration-multiple-platforms.webp";

function ItemSeven() {
	const item = document.createElement("div");
	item.id = "item-7";
	item.className =
		"flex flex-col md:items-center bg-[#FFFFFF] rounded-xl p-4 md:p-0";

	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-3 md:gap-0 md:h-full md:items-center md:py-3 md:justify-evenly">
			
			<img 
				class="md:basis-1/2 md:max-h-[50%] md:w-auto md:object-contain md:aspect-[633/134] md:transform md:scale-130 md:translate-x-[20%]"
				loading="lazy" 
				src="${ImageMultiplePlatforms}" 
				alt="Illustration of multiple platforms"
			/>

			<figcaption
				class="font-bold text-2xl md:max-w-[80%] md:text-[clamp(0.25rem,2vw,1.35rem)]">
				Manage multiple accounts and platforms.
			</figcaption>
		</figure>
	`.trim();

	return item;
}

export default ItemSeven();
