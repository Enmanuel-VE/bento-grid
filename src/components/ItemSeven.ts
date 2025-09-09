import ImageMultiplePlatforms from "../assets/images/illustration-multiple-platforms.webp";

function ItemSeven() {
	const item = document.createElement("div");
	item.id = "item-7";
	item.className = "bg-[#FFFFFF] rounded-xl md:aspect-square";

	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-3 items-center p-4">
			<img class="w-full" loading="lazy" src="${ImageMultiplePlatforms}" alt="Illustration of multiple platforms">
			<figcaption class="text-2xl font-medium">Manage multiple accounts and platforms.</figcaption>
		</figure>
	`.trim();

	return item;
}

export default ItemSeven();
