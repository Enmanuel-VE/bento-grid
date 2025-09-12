import image from "../assets/images/illustration-audience-growth.webp";

function ItemThree(): HTMLElement {
	const item = document.createElement("article");
	item.id = "item-3";
	item.className =
		"flex flex-col justify-center items-center bg-[#FFFFFF] rounded-xl p-4 lg:p-0";

	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-6 lg:gap-2 lg:max-w-[80%] lg:max-h-[90%] lg:justify-center">

			<figcaption class="flex-1/2 lg:h-full flex flex-col justify-around text-xl lg:text-[clamp(0.5rem,2vw,1rem)] gap-6 lg:gap-2">
				<span class="font-bold text-6xl lg:text-[clamp(1rem,3vw,8rem)]">>56%</span> 
				faster audience growth
			</figcaption>
			<img class="flex-1/2 lg:h-full w-[65%] lg:w-[80%]" loading="lazy" src="${image}" alt="Illustration of audience growth">
		</figure>
	`.trim();
	return item;
}

export default ItemThree();
