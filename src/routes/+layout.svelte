<script>
	import '../app.postcss';
</script>

<header class="bg-[#3a8372] mb-8 text-white drop-shadow-lg">
	<nav class="container flex items-center mx-auto px-3 py-2">
		<h1 class="text-2xl">
			stalengd
		</h1>

		<ul class="flex ml-auto">
			<li class="text-3xl px-2 py-1 hover:bg-[#4e4558] rounded-md transition-colors">
				<a href="https://github.com/stalengd" target="_blank">
					<i class="bi bi-github"></i>
				</a>
			</li>
			<li class="text-3xl px-2 py-1 hover:bg-[#4e4558] rounded-md transition-colors">
				<a href="https://t.me/StalenGD" target="_blank">
					<i class="bi bi-telegram"></i>
				</a>
			</li>
		</ul>
	</nav>
</header>

<main class="container mx-auto p-1">
	<slot />
</main>