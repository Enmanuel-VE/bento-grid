import IllustrationForSchedule from "../assets/images/illustration-consistent-schedule.webp";

function ItemSix(): HTMLElement {
	const item = document.createElement("article");
	item.id = "item-6";
	item.className = "bg-[#FFCC69] rounded-xl overflow-hidden";

	item.innerHTML = /*html*/ `
	 <figure class="flex flex-col px-4 pt-5 lg:p-0 lg:h-full lg:justify-evenly lg:items-center gap-3 lg:gap-0">
	 	<figcaption
			class="p-3 lg:pb-0 lg:pt-3 lg:px-3 text-3xl lg:text-[clamp(0.25rem,2vw,1.35rem)] font-bold"
		>
			Maintain a consistent posting schedule.
		</figcaption>

	 	<img 
			class="w-[80%] transform translate-y-[15%] lg:translate-y-[20%]" 
			loading="lazy" 
			src="${IllustrationForSchedule}" 
			alt="Illustration of consistent schedule"
		/>
	 </figure>
	
	`.trim();
	return item;
}

export default ItemSix();
