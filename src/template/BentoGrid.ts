import Aside from "../components/aside/Aside.js";
import ItemEight from "../components/ItemEight.js";
import ItemFive from "../components/ItemFive.js";
import ItemFour from "../components/ItemFour.js";
import ItemSeven from "../components/ItemSeven.js";
import ItemSix from "../components/ItemSix.js";
import ItemThree from "../components/ItemThree.js";

function BentoGrid() {
	const gridContainer = document.createElement("main");

	gridContainer.id = "grid-container";
	gridContainer.className = `min-h-screen justify-end flex flex-col-reverse px-4 md:py-4 py-6 gap-8 md:grid md:grid-cols-3 md:grid-cols-4 md:gap-4`;

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
