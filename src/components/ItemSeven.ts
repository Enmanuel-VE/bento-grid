import ImageMultiplePlatforms from "../assets/images/illustration-multiple-platforms.webp";

function ItemSeven(): HTMLElement {
	const item = document.createElement("article");
	item.id = "item-7";
	item.className =
		"flex flex-col lg:items-center bg-[#FFFFFF] rounded-xl p-4 lg:p-0";

	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-3 lg:gap-0 lg:h-full lg:items-center lg:py-3 lg:justify-evenly">
			
			<img 
				class="lg:basis-1/2 lg:max-h-[50%] lg:w-auto lg:object-contain lg:aspect-[633/134] lg:transform lg:scale-130 lg:translate-x-[20%]"
				loading="lazy" 
				src="${ImageMultiplePlatforms}" 
				alt="Illustration of multiple platforms"
			/>

			<figcaption
				class="font-bold text-2xl lg:max-w-[80%] lg:text-[clamp(0.25rem,2vw,1.35rem)]">
				Manage multiple accounts and platforms.
			</figcaption>
		</figure>
	`.trim();

	return item;
}

export default ItemSeven();
