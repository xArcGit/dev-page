import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<>
			<div class="container container-center container-spacing-xl">
				<h3>Projects</h3>
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: "Project",
	meta: [
		{
			name: "",
			content: "",
		},
	],
};
