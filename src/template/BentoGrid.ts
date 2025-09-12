import Aside from "../components/aside/Aside.js";
import ItemThree from "../components/ItemThree.js";
import ItemFour from "../components/ItemFour.js";
import ItemFive from "../components/ItemFive.js";
import ItemSix from "../components/ItemSix.js";
import ItemSeven from "../components/ItemSeven.js";
import ItemEight from "../components/ItemEight.js";

function BentoGrid(): HTMLElement {
	const gridContainer = document.createElement("section");

	gridContainer.id = "grid-container";
	gridContainer.className = `justify-end flex flex-col-reverse px-4 lg:p-0 py-6 gap-8 lg:grid lg:grid-cols-4 lg:gap-4`;

	gridContainer.append(
		Aside,
		ItemThree,
		ItemFour,
		ItemFive,
		ItemSix,
		ItemSeven,
		ItemEight
	);

	return gridContainer;
}

export default BentoGrid();
