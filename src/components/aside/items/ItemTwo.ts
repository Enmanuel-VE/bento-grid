import aiContentIllustration from "../../../assets/images/illustration-ai-content.webp";

function ItemTwo() {
	const item = document.createElement("div");
	item.id = "item-2";
	item.className = "bg-[#FFCC69] rounded-xl md:flex-1/2";
	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-6 p-6"> 
			<figcaption class="font-medium text-3xl">
				Write your content using AI.
			</figcaption>

			<img class="w-[65dvw]" loading="lazy" src="${aiContentIllustration}" alt="Illustration of AI content">
		</figure>
	`.trim();
	return item;
}

export default ItemTwo();
