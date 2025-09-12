import postCreationImage from "../../../assets/images/illustration-create-post.webp";

function ItemOne() {
	const item = document.createElement("div");
	item.id = "item-1";
	item.className =
		"flex flex-col justify-center md:items-center p-6 md:p-0 md:py-2 bg-[#FAEEE2] rounded-xl md:flex-1/2";

	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-4 md:gap-6 md:max-w-[80%] md:max-h-[90%]">
			<figcaption class="font-bold text-3xl md:text-[clamp(1.5rem,2vw,3.5rem)]">
				Create and schedule content <span class="text-[#7B53E0] italic">quicker.</span>
			</figcaption>
			<img class="w-[70%]" loading="lazy" src="${postCreationImage}" alt="Illustration of post creation">
		</figure>
	`.trim();

	return item;
}

export default ItemOne();
