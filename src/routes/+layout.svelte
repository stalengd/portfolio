<script>
	import '../app.postcss';
</script>

<nav class="container flex mx-auto p-2 pb-8">
	<h1 class="text-2xl">
		stalengd
	</h1>

	<ul class="flex ml-auto">
		<li class="text-3xl px-2 py-1 hover:bg-blue-50 rounded-md transition-colors">
			<a href="https://github.com/stalengd" target="_blank">
				<i class="bi bi-github"></i>
			</a>
		</li>
		<li class="text-3xl px-2 py-1 hover:bg-blue-50 rounded-md transition-colors">
			<a href="https://t.me/StalenGD" target="_blank">
				<i class="bi bi-telegram"></i>
			</a>
		</li>
	</ul>
</nav>

<main class="container mx-auto p-1">
	<slot />
</main>