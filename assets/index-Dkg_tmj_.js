(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(t){if(t.ep)return;t.ep=!0;const l=i(t);fetch(t.href,l)}})();const o="data:image/webp;base64,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";function a(){const e=document.createElement("article");return e.id="item-1",e.className="flex flex-col justify-center lg:items-center p-6 lg:p-0 lg:py-2 bg-[#FAEEE2] rounded-xl lg:flex-1/2",e.innerHTML=`
		<figure class="flex flex-col gap-4 lg:gap-6 lg:max-w-[80%] lg:max-h-[90%]">
			<figcaption class="font-bold text-3xl lg:text-[clamp(1.5rem,2vw,3.5rem)]">
				Create and schedule content <span class="text-[#7B53E0] italic">quicker.</span>
			</figcaption>
			<img class="w-[70%]" loading="lazy" src="${o}" alt="Illustration of post creation">
		</figure>
	`.trim(),e}const c=a(),g="/bento-grid/assets/illustration-ai-content-CS_VQC1N.webp";function f(){const e=document.createElement("article");return e.id="item-2",e.className="flex flex-col lg:justify-center lg:items-center bg-[#FFCC69] rounded-xl lg:flex-1/2",e.innerHTML=`
		<figure class="flex flex-col gap-6 p-6 lg:p-0 lg:py-3 lg:gap-3 lg:justify-evenly lg:max-w-[80%] lg:h-full lg:items-center"> 
			<figcaption class=" font-bold text-3xl lg:text-[clamp(1.5rem,1.5vw,3rem)]">
				Write your content using AI.
			</figcaption>

			<img class="w-[70%] lg:w-full"  loading="lazy" src="${g}" alt="Illustration of AI content">
		</figure>
	`.trim(),e}const m=f();function p(){const e=document.createElement("div");return e.id="group",e.className="flex flex-col gap-4 lg:h-full lg:justify-items-center",e.append(c,m),e}const d=p(),u="/bento-grid/assets/illustration-audience-growth-D9Hp1Umb.webp";function A(){const e=document.createElement("article");return e.id="item-3",e.className="flex flex-col justify-center items-center bg-[#FFFFFF] rounded-xl p-4 lg:p-0",e.innerHTML=`
		<figure class="flex flex-col gap-6 lg:gap-2 lg:max-w-[80%] lg:max-h-[90%] lg:justify-center">

			<figcaption class="flex-1/2 lg:h-full flex flex-col justify-around text-xl lg:text-[clamp(0.5rem,2vw,1rem)] gap-6 lg:gap-2">
				<span class="font-bold text-6xl lg:text-[clamp(1rem,3vw,8rem)]">>56%</span> 
				faster audience growth
			</figcaption>
			<img class="flex-1/2 lg:h-full w-[65%] lg:w-[80%]" loading="lazy" src="${u}" alt="Illustration of audience growth">
		</figure>
	`.trim(),e}const x=A(),w="/bento-grid/assets/illustration-grow-followers-ymENK2jP.webp";function y(){const e=document.createElement("article");return e.id="item-4",e.className="rounded-xl bg-[#7651DC] p-8 lg:p-0 flex items-center justify-center",e.innerHTML=`
		<figure class="flex flex-col lg:max-h-[calc(100%-2rem)] lg:max-w-[calc(100%-2rem)] gap-8 items-center lg:flex-row lg:gap-4">
			<img class="max-w-[70%] lg:max-w-[35%]" loading="lazy" src="${w}" alt="Illustration of growing followers">
			
			<figcaption class="font-bold px-4 text-white text-center text-3xl lg:text-[clamp(0.25rem,2vw,4rem)] lg:max-w-60 lg:text-left">
				Grow followers with non-stop content.
			</figcaption>
		</figure>
	`.trim(),e}const h=y(),b="/bento-grid/assets/illustration-schedule-posts-BIE9DKBF.webp";function I(){const e=document.createElement("article");return e.id="item-5",e.className="flex flex-col bg-[#DCD1FC] rounded-xl p-6 lg:p-4 gap-4 justify-center",e.innerHTML=`
		<div class="flex flex-col items-center lg:py-3 lg:items-start gap-3 lg:h-full lg:justify-evenly">
	 		<p class="text-center text-2xl lg:text-[clamp(1.5rem,2vw,3.5rem)] font-bold lg:text-left">
				Schedule to social media.
			</p>

			<img 
				class="lg:aspect-[16/9] lg:h-full lg:w-full lg:transform lg:translate-x-[40%]" 
				loading="lazy" 
				src="${b}" 
				alt="Illustration of scheduling posts"
			/>

			<p class="text-center lg:text-left font-medium text-lg p-4 lg:p-0 text-[#524B5E] lg:text-[clamp(0.5rem,1.5vw,1rem)]">
				Optimize post timings to publish content at the perfect time for your audience.
			</p>
		</div>
	`.trim(),e}const B=I(),L="/bento-grid/assets/illustration-consistent-schedule-C7Lh4TG7.webp";function E(){const e=document.createElement("article");return e.id="item-6",e.className="bg-[#FFCC69] rounded-xl overflow-hidden",e.innerHTML=`
	 <figure class="flex flex-col px-4 pt-5 lg:p-0 lg:h-full lg:justify-evenly lg:items-center gap-3 lg:gap-0">
	 	<figcaption
			class="p-3 lg:pb-0 lg:pt-3 lg:px-3 text-3xl lg:text-[clamp(0.25rem,2vw,1.35rem)] font-bold"
		>
			Maintain a consistent posting schedule.
		</figcaption>

	 	<img 
			class="w-[80%] transform translate-y-[15%] lg:translate-y-[20%]" 
			loading="lazy" 
			src="${L}" 
			alt="Illustration of consistent schedule"
		/>
	 </figure>
	
	`.trim(),e}const D=E(),z="/bento-grid/assets/illustration-multiple-platforms-DFri10yH.webp";function N(){const e=document.createElement("article");return e.id="item-7",e.className="flex flex-col lg:items-center bg-[#FFFFFF] rounded-xl p-4 lg:p-0",e.innerHTML=`
		<figure class="flex flex-col gap-3 lg:gap-0 lg:h-full lg:items-center lg:py-3 lg:justify-evenly">
			
			<img 
				class="lg:basis-1/2 lg:max-h-[50%] lg:w-auto lg:object-contain lg:aspect-[633/134] lg:transform lg:scale-130 lg:translate-x-[20%]"
				loading="lazy" 
				src="${z}" 
				alt="Illustration of multiple platforms"
			/>

			<figcaption
				class="font-bold text-2xl lg:max-w-[80%] lg:text-[clamp(0.25rem,2vw,1.35rem)]">
				Manage multiple accounts and platforms.
			</figcaption>
		</figure>
	`.trim(),e}const P=N(),Q="data:image/webp;base64,UklGRpgFAABXRUJQVlA4WAoAAAAQAAAAfwEAPwAAQUxQSKsBAAABgFXbdtxGEARBEARBEAxBEMQgYmAzSBgUgiAYwoMgCK+jr570cztHBMO2bRzJC5xy/csC7pdzUqmJeo9dX7NDmPYo+i4FQrSHvKd7CM0eWXV4ILLsIR8RPAxJ9sh6EXwWIdlDrmh4GFLskVQtA5Fij3ZNwxDsEVRtA5FgjzuiYej1CAoT4DBk18OfmNNDmPXwsYgORHJEpSDUI8Rc9ifpakg/2162dFEPKj1y6zozZwYw6HHT6SkQ9jyCLgheDMjz2FaQMdx55BVsGO48/AoChjyPOp/qcNjzqOvLwJ9HXV0GBj3q2jJw6JFXHgFZ9Nj6HPpIGXj0iFMa3qPDYdIjiB0ZKQOXHqGbmz3yPopNjzJ/C6TTw09/+kiox3T49EhWIoZPj2KlYPj0OKwcGD49mvmFNYZPD/utEUOnR1RzIoROj2wnY9j0OOwcGDY9mp2GYdOjo0Ym7zaxboRkekT0pfCHtVRsH9AT5jGNXq+ekVQx/cHDpYfvF/uTB4/TH5YnYWR6lA8L5sDsDI/xTxDY9KhdtQ3OzU1Ue3E4hHokw84Uo3c4fHn8OxYHAFZQOCDGAwAA8BkAnQEqgAFAAD6RPpVIKbIhoTP7+xiwEglobuDBJ/gGMBeAP2V/gEIA/gH4AfoB/APUHH/8/0peIn5A7tq+flOId4ZxZ92Uf6wB6gPMA5xn/l/xnqr+wD3wPT9/ft9A9ADzXvWDyPlWNqxhzgyqVQk/8Gi8IceuKPP0Q0WLeC45G2kbZbdeStdm3lhdSwk4oQLRAWPFLhsOdwtk7UaKc7mIMNiJJWrB3KWefTUQ+KMs8ZDzI9IDjjPXTl/WN3apap+5L+sboUFSfQUlOyijVIR7WVAxklcAAP4UvJ7yh7Xe0YhnI5oFpsWoo+JqvLAAPovDgH4pX1WycI022TTMOIijBKlzLHsErLFKMiMnoNkTrecl83ZpNIi/Rg1NSr4su3zOtQClilGRGT0GyJ1vOS+bs0mkRfowampV8WXb5nWoBSxSjIjJ6DZE63nJfN2aTSIv0YNTUq+LLt8zrUApYpRkRk9Bsidb2UMR9K7GZn+/ebB0ley2TyauQLQ360iXb7idzfUtLOiR+yFSgV3kaZLD0dAQ2T5gBqH2BXzrYjqUWd1jIIcYtIbMnWtdqNbOtbLDUSbb85hoGe/6VRTreFMrnzS90g+WNeNnzIEeAEL3EqmR09/Sxq6T28dmN/wvprBQiqjhJ47DFLpQTLQS9aiJ2zu0EXHDcqGMIzJZlAEAZ48gDybOt/DicxYkdHhQmrpdwvBPj250EP+zZ1uP1nV769s5OI5MetXWlSXd6oBTyNMlmUAQ9aKqgFDPH+E1PIbUqL0AyooP1Y5KTJ2ol++LXJuB+tIl2+4nc31LSzokfshUpUZbsv+2QzWbWr+gEL3EvJvBDQt/ueGx4tFFAAZNmb3xU7C4vK/l3voW0uKCE5tTAOXlTQzDW0SeGS+XuZf+6BwKltXpbVpAMa/jXpxzC4LL69cH6amAM+bEiFpWAf6dtFY/0VOAchNPGeQJAmxhHl2hPmESKwT9JBJN8bOt8qToViEwHIY09GeQJAmxbfGhqALbu447+yVQlthQyAR1OAjyGlBWZx16vKSAo0QgHB1tPUhxs2DDOX0gSguewljY2nb90YRDNEKbu+7Prj3GFecnw6tysHi/1Cv8nYl32r7VD8Q4vxEsc1gJr44dJXvjcJXxW2sE5X9KVh4GVRfB6N3PY/IHxGmJmjI/ae/bMo3+6q4Pw6F1Y3pA10Bt9XLw7p/ORsolZU6ZwfEaYmaMj9p79syjf7qrjscruEB2mqV2kVHBiZsNMyxf612XI8SjnB8PmPL6j1tPftmUb+i5gAAA";function j(){const e=document.createElement("article");return e.id="item-8",e.className=`
		flex flex-col gap-8 bg-[#7651DC] p-9 rounded-xl justify-center lg:items-center lg:p-3 
	`,e.innerHTML=`
		<p class="text-5xl lg:text-[clamp(1.5rem,3vw,3.5rem)] lg:max-w-[80%] font-medium text-white text-center">
			Social Media 
			<span class="text-[#FDCD67]">10x</span>
			<span class="italic">Faster</span>
			with AI
		</p>

		<figure class="flex flex-col gap-1 items-center lg:max-w-[80%]">
			<img
				loading="lazy"
				src="${Q}"
				alt="Illustration of five stars"
				class="w-[70%] lg:w-[40%]"
			/>
			<figcaption class="text-xl text-white text-center lg:text-[clamp(0.5rem,2vw,1rem)]">
				Over 4,000 5-star reviews
			</figcaption>
		</figure>
		`.trim(),e}const F=j();function v(){const e=document.createElement("section");return e.id="grid-container",e.className="justify-end flex flex-col-reverse px-4 lg:p-0 py-6 gap-8 lg:grid lg:grid-cols-4 lg:gap-4",e.append(d,x,h,B,D,P,F),e}const G=v();function H(){const e=document.createElement("div");e.id="app",e.classList.add("font-sans","flex","justify-center","items-center","min-h-[100dvh]","bg-[#F5F5F5]"),e.append(G),document.body.append(e)}window.addEventListener("load",H);
