<script>
	import '../app.postcss';
	import { isDarkTheme, renderTheme, switchTheme } from '$lib/themes'
	import { browser } from '$app/environment';
	if (browser) renderTheme();
</script>

<header class="bg-[#3a8372] dark:bg-[#120e14] mb-8 text-white drop-shadow-lg">
	<nav class="container flex items-center mx-auto px-3 py-2">
		<h1 class="text-2xl">
			stalengd
		</h1>

		<ul class="flex items-center ml-auto">
			<li>
				<a href="https://github.com/stalengd" target="_blank" class="block text-3xl px-2 py-1 hover:bg-[#4e4558] rounded-md transition-colors">
					<i class="bi bi-github"></i>
				</a>
			</li>
			<li>
				<a href="https://t.me/StalenGD" target="_blank" class="block text-3xl px-2 py-1 hover:bg-[#4e4558] rounded-md transition-colors">
					<i class="bi bi-telegram"></i>
				</a>
			</li>
			<li>
				<button on:click={switchTheme} class="text-xl ml-2 px-2 py-1 hover:bg-[#4e4558] rounded-xl transition-colors text-gray-300">
					{#if $isDarkTheme}
						<i class="bi bi-moon"></i>
					{:else}
						<i class="bi bi-sun"></i>
					{/if}
				</button>
			</li>
		</ul>
	</nav>
</header>

<main class="container mx-auto p-1">
	<slot />
</main>