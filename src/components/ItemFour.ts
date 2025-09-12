import IllustrationGrowFollowers from "../assets/images/illustration-grow-followers.webp";

function ItemFour(): HTMLElement {
	const item = document.createElement("article");
	item.id = "item-4";
	item.className =
		"rounded-xl bg-[#7651DC] p-8 lg:p-0 flex items-center justify-center";
	item.innerHTML = /*html*/ `
		<figure class="flex flex-col lg:max-h-[calc(100%-2rem)] lg:max-w-[calc(100%-2rem)] gap-8 items-center lg:flex-row lg:gap-4">
			<img class="max-w-[70%] lg:max-w-[35%]" loading="lazy" src="${IllustrationGrowFollowers}" alt="Illustration of growing followers">
			
			<figcaption class="font-bold px-4 text-white text-center text-3xl lg:text-[clamp(0.25rem,2vw,4rem)] lg:max-w-60 lg:text-left">
				Grow followers with non-stop content.
			</figcaption>
		</figure>
	`.trim();
	return item;
}

export default ItemFour();
