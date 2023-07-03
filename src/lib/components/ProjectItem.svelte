<script lang="ts">
    import type { Project } from '$lib/projects'

    export let project: Project;
</script>

<a href={project.url} target="_blank" class='group hover:bg-[#372b3d] hover:text-white rounded-[2rem] p-2 pb-4'>
    <div class='w-full aspect-video bg-[#433a4e] rounded-3xl bg-center bg-cover sm:bg-blend-lighten drop-shadow-md group-hover:transition-none group-hover:bg-blend-normal transition-all duration-500' style="background-image: url('{project.imageUrl}');">

    </div>
    <p class='flex flex-row flex-wrap items-center text-xl m-1'>
        <span>
            {project.name}
        </span>
        <span class='text-gray-500 group-hover:text-gray-300 relative ml-6'>
            <span class='bg-gray-100 group-hover:bg-[#4e4558] w-2 h-2 rounded-full absolute -left-4 bottom-2'/>
            {project.year}
        </span>
        <span class='text-gray-500 group-hover:text-gray-300 relative ml-6'>
            <span class='bg-gray-100 group-hover:bg-[#4e4558] w-2 h-2 rounded-full absolute -left-4 bottom-2'/>
            {project.role}
        </span>
    </p>
    <div class='flex flex-row flex-wrap'>
        {#each project.tags as tag}
            <div class='bg-gray-100 group-hover:bg-[#4e4558] text-sm rounded-full px-3 py-1 mx-[2px] my-1'>{tag}</div>
        {/each}
    </div>
</a>