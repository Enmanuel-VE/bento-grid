import ItemOne from "./items/ItemOne.js";
import ItemTwo from "./items/ItemTwo.js";

function Aside(): HTMLElement {
	const aside = document.createElement("div");
	aside.id = "group";
	aside.className = "flex flex-col gap-4 lg:h-full lg:justify-items-center";
	aside.append(ItemOne, ItemTwo);
	return aside;
}

export default Aside();
