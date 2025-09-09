import image from "../assets/images/illustration-audience-growth.webp";

function ItemThree() {
	const item = document.createElement("div");
	item.id = "item-3";
	item.className = "bg-[#FFFFFF] rounded-xl p-4 md:aspect-square";
	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-6">
			<figcaption class="flex flex-col text-xl gap-6">
				<span class="font-bold text-6xl">56%</span> 
				faster audience growth
			</figcaption>
			<img class="w-[65%]" loading="lazy" src="${image}" alt="Illustration of audience growth">
		</figure>
	`.trim();
	return item;
}

export default ItemThree();
