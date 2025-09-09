import postCreationImage from "../../../assets/images/illustration-create-post.webp";

function ItemOne() {
	const item = document.createElement("div");
	item.id = "item-1";
	item.className = "flex flex-col p-4 bg-[#FAEEE2] rounded-xl md:flex-1/2";
	item.innerHTML = /*html*/ `
		<figure class="flex flex-col gap-4">
			<figcaption class="font-bold text-3xl p-4">
				Create and schedule content <span class="text-[#7B53E0] italic">quicker.</span>
			</figcaption>
			<img class="w-[70%]" loading="lazy" src="${postCreationImage}" alt="Illustration of post creation">
		</figure>
	`.trim();
	return item;
}

export default ItemOne();
