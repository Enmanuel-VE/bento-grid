import "./styles/globals.css";
import BentoGrid from "./template/BentoGrid.js";

function app(): void {
	const APP = document.createElement("div");

	APP.id = "app";
	APP.classList.add(
		"font-sans",
		"flex",
		"justify-center",
		"items-center",
		"min-h-[100dvh]",
		"bg-[#F5F5F5]"
	);
	APP.append(BentoGrid);

	document.body.append(APP);
}

window.addEventListener("load", app);
