<script lang="ts">
    import ProjectItem from "$lib/components/ProjectItem.svelte";
    import { projects, tags } from '$lib/projects'
</script>

<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
    {#each projects as project }
        <ProjectItem project={project} />
    {/each}
</div>