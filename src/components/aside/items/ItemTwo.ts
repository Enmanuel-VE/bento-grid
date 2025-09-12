import aiContentIllustration from "../../../assets/images/illustration-ai-content.webp";

function ItemTwo() {
	const item = document.createElement("div");
	item.id = "item-2";
	item.className =
		"flex flex-col md:justify-center md:items-center bg-[#FFCC69] rounded-xl md:flex-1/2";

	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-6 p-6 md:p-0 md:py-3 md:gap-3 md:justify-evenly md:max-w-[80%] md:h-full md:items-center"> 
			<figcaption class=" font-bold text-3xl md:text-[clamp(1.5rem,2vw,3.5rem)]">
				Write your content using AI.
			</figcaption>

			<img class="w-[70%] md:w-full"  loading="lazy" src="${aiContentIllustration}" alt="Illustration of AI content">
		</figure>
	`.trim();
	return item;
}

export default ItemTwo();
