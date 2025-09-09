import IllustrationGrowFollowers from "../assets/images/illustration-grow-followers.webp";

function ItemFour() {
	const item = document.createElement("div");
	item.id = "item-4";
	item.className =
		"rounded-xl bg-[#7651DC] p-8 flex items-center justify-center md:col-span-2";
	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-8 items-center max-w-[85%]">
			<img loading="lazy" src="${IllustrationGrowFollowers}" alt="Illustration of growing followers">
			<figcaption class="font-medium text-white text-center text-3xl">
				Grow followers with non-stop content.
			</figcaption>
		</figure>
	`.trim();
	return item;
}

export default ItemFour();
