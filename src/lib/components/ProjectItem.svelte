<script lang="ts">
    import type { Project } from '$lib/projects'

    export let project: Project;
</script>

<a href={project.url} target="_blank" class='group hover:bg-blue-50 rounded-md transition-colors p-2'>
    <div class='w-full aspect-video bg-slate-200 rounded-md bg-center bg-cover group-hover:brightness-125 transition-all' style="background-image: url('{project.imageUrl}');">

    </div>
    <p class='flex flex-row flex-wrap items-center text-xl m-1'>
        <span>
            {project.name}
        </span>
        <span class='text-gray-500 relative ml-6'>
            <span class='bg-slate-200 w-2 h-2 rounded-full absolute -left-4 bottom-2'/>
            {project.year}
        </span>
        <span class='text-gray-500 relative ml-6'>
            <span class='bg-slate-200 w-2 h-2 rounded-full absolute -left-4 bottom-2'/>
            {project.role}
        </span>
    </p>
    <div class='flex flex-row flex-wrap'>
        {#each project.tags as tag}
            <div class='bg-slate-200 rounded px-2 py-1 m-1'>{tag}</div>
        {/each}
    </div>
</a>