import IllustrationForSchedule from "../assets/images/illustration-consistent-schedule.webp";

function ItemSix() {
	const item = document.createElement("div");
	item.id = "item-6";
	item.className = "bg-[#FFCC69] rounded-xl overflow-hidden";

	item.innerHTML = /*html*/ `
	 <figure class="flex flex-col px-4 pt-5 md:p-0 md:h-full md:justify-evenly md:items-center gap-3 md:gap-0">
	 	<figcaption
			class="p-3 md:pb-0 md:pt-3 md:px-3 text-3xl md:text-[clamp(0.25rem,2vw,1.35rem)] font-bold"
		>
			Maintain a consistent posting schedule.
		</figcaption>

	 	<img 
			class="w-[80%] transform translate-y-[15%] md:translate-y-[20%]" 
			loading="lazy" 
			src="${IllustrationForSchedule}" 
			alt="Illustration of consistent schedule"
		/>
	 </figure>
	
	`.trim();
	return item;
}

export default ItemSix();
