import IllustrationForSchedule from "../assets/images/illustration-consistent-schedule.webp";

function ItemSix() {
	const item = document.createElement("div");
	item.id = "item-6";
	item.classList.add("bg-[#FFCC69]", "rounded-xl", "md:aspect-square");
	item.innerHTML = /*html*/ `
	 <figure class="max-h-[35dvh] flex flex-col px-4 pt-5 overflow-hidden ">
	 	<figcaption class="text-3xl font-medium">Maintain a consistent posting schedule.</figcaption>
	 	<img class="relative top-5 w-[65%]" loading="lazy" src="${IllustrationForSchedule}" alt="Illustration of consistent schedule">
	 </figure>
	
	`.trim();
	return item;
}

export default ItemSix();
