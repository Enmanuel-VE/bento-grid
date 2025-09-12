import aiContentIllustration from "../../../assets/images/illustration-ai-content.webp";

function ItemTwo(): HTMLElement {
	const item = document.createElement("article");
	item.id = "item-2";
	item.className =
		"flex flex-col lg:justify-center lg:items-center bg-[#FFCC69] rounded-xl lg:flex-1/2";

	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-6 p-6 lg:p-0 lg:py-3 lg:gap-3 lg:justify-evenly lg:max-w-[80%] lg:h-full lg:items-center"> 
			<figcaption class=" font-bold text-3xl lg:text-[clamp(1.5rem,1.5vw,3rem)]">
				Write your content using AI.
			</figcaption>

			<img class="w-[70%] lg:w-full"  loading="lazy" src="${aiContentIllustration}" alt="Illustration of AI content">
		</figure>
	`.trim();
	return item;
}

export default ItemTwo();
