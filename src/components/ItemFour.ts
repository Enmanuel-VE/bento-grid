import IllustrationGrowFollowers from "../assets/images/illustration-grow-followers.webp";

function ItemFour() {
	const item = document.createElement("div");
	item.id = "item-4";
	item.className =
		"rounded-xl bg-[#7651DC] p-8 md:p-0 flex items-center justify-center";
	item.innerHTML = /*html*/ `
		<figure class="flex flex-col md:max-h-[calc(100%-2rem)] md:max-w-[calc(100%-2rem)] gap-8 items-center md:flex-row md:gap-4">
			<img class="max-w-[70%] md:max-w-[35%]" loading="lazy" src="${IllustrationGrowFollowers}" alt="Illustration of growing followers">
			
			<figcaption class="font-bold px-4 text-white text-center text-3xl md:text-[clamp(0.25rem,2vw,4rem)] md:max-w-60 md:text-left">
				Grow followers with non-stop content.
			</figcaption>
		</figure>
	`.trim();
	return item;
}

export default ItemFour();
