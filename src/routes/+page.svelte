<svelte:head>
    <title>stalengd</title> 
    <meta name="description" content="stalengd developer" />
</svelte:head>

<script lang="ts">
    import ProjectItem from "$lib/components/ProjectItem.svelte";
    import { projects, tags } from '$lib/projects'
</script>

<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
    {#each projects as project }
        <ProjectItem project={project} />
    {/each}
</div>