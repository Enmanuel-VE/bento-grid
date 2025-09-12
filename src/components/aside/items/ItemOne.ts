import postCreationImage from "../../../assets/images/illustration-create-post.webp";

function ItemOne(): HTMLElement {
	const item = document.createElement("article");
	item.id = "item-1";
	item.className =
		"flex flex-col justify-center lg:items-center p-6 lg:p-0 lg:py-2 bg-[#FAEEE2] rounded-xl lg:flex-1/2";

	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-4 lg:gap-6 lg:max-w-[80%] lg:max-h-[90%]">
			<figcaption class="font-bold text-3xl lg:text-[clamp(1.5rem,2vw,3.5rem)]">
				Create and schedule content <span class="text-[#7B53E0] italic">quicker.</span>
			</figcaption>
			<img class="w-[70%]" loading="lazy" src="${postCreationImage}" alt="Illustration of post creation">
		</figure>
	`.trim();

	return item;
}

export default ItemOne();
