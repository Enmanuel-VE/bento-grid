import BentoGrid from "./template/BentoGrid.js";
import { $ } from "./utils/shortFunctions.js";

function app() {
	const APP = $("#app");

	if (!APP) throw new Error("No root element found");

	APP.className =
		"flex justify-center items-center min-h-[100dvh] bg-[#F5F5F5]";

	APP.append(BentoGrid);
}

window.addEventListener("load", app);
