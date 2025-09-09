import ItemOne from "./items/ItemOne.js";
import ItemTwo from "./items/ItemTwo.js";

function Aside() {
	const aside = document.createElement("aside");
	aside.id = "group";
	aside.className = "flex flex-col gap-4 md:row-span-2";
	aside.append(ItemOne, ItemTwo);
	return aside;
}

export default Aside();
