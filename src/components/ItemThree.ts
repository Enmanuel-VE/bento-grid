import image from "../assets/images/illustration-audience-growth.webp";

function ItemThree() {
	const item = document.createElement("div");
	item.id = "item-3";
	item.className =
		"flex flex-col justify-center items-center bg-[#FFFFFF] rounded-xl p-4 md:p-0";

	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-6 md:gap-2 md:max-w-[80%] md:max-h-[90%] md:justify-center">

			<figcaption class="flex-1/2 md:h-full flex flex-col justify-around text-xl md:text-[clamp(0.5rem,2vw,1rem)] gap-6 md:gap-2">
				<span class="font-bold text-6xl md:text-[clamp(1rem,3vw,8rem)]">>56%</span> 
				faster audience growth
			</figcaption>
			<img class="flex-1/2 md:h-full w-[65%] md:w-[80%]" loading="lazy" src="${image}" alt="Illustration of audience growth">
		</figure>
	`.trim();
	return item;
}

export default ItemThree();
