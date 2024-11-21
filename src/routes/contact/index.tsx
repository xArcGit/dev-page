import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			<div role="presentation" class="ellipsis" />
			<div role="presentation" class="ellipsis ellipsis-purple" />

			<div class="container container-center container-spacing-xl">
				<h3>
					You can <span class="highlight">count</span>
					<br /> on me
				</h3>
			</div>
		</>
	);
});
