import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

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

export const head: DocumentHead = {
	title: 'Portfolio',
	meta: [
		{
			name: 'Developer Portfolio - [Your Name]',
			content:
				'A portfolio showcasing the projects, skills, and experience of [Your Name], a software developer.',
		},
	],
};
