import BentoGrid from "./template/BentoGrid.js";
import { $ } from "./utils/shortFunctions.js";

function app() {
	const ROOT = $("#app");

	if (!ROOT) throw new Error("No root element found");

	ROOT.className =
		"flex justify-center items-center min-h-screen bg-[#F5F5F5]";

	ROOT.append(BentoGrid);
}

window.addEventListener("load", app);
