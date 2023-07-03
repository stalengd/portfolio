<script lang="ts">
    import type { Project } from '$lib/projects'

    export let project: Project;
</script>

<a href={project.url} target="_blank" class='group hover:bg-[#372b3d] dark:hover:bg-[#120e14] hover:text-white dark:text-white dark:hover:text-white rounded-[2rem] p-2 pb-4'>
    <div 
        class='w-full aspect-video bg-[#433a4e] dark:bg-[#ccc5d6] rounded-3xl bg-center bg-cover sm:bg-blend-lighten dark:sm:bg-blend-darken drop-shadow-md group-hover:transition-none group-hover:bg-blend-normal duration-500' 
        style="background-image: url('{project.imageUrl}');"
    >
    </div>
    <p class='flex flex-row flex-wrap items-center text-xl m-1'>
        <span>
            {project.name}
        </span>
        <span class='relative ml-6'>
            <span class='bg-gray-100 dark:bg-[#37303e] group-hover:bg-[#4e4558] dark:group-hover:bg-[#372b3d] w-2 h-2 rounded-full absolute -left-4 bottom-2'/>
            <span class='opacity-70'>
                {project.year}
            </span>
        </span>
        <span class='relative ml-6'>
            <span class='bg-gray-100 dark:bg-[#37303e] group-hover:bg-[#4e4558] dark:group-hover:bg-[#372b3d] w-2 h-2 rounded-full absolute -left-4 bottom-2'/>
            <span class='opacity-70'>
                {project.role}
            </span>
        </span>
    </p>
    <div class='flex flex-row flex-wrap'>
        {#each project.tags as tag}
            <div class='dark:text-gray-300 dark:group-hover:text-white bg-gray-100 dark:bg-[#37303e] group-hover:bg-[#4e4558] dark:group-hover:bg-[#372b3d] text-sm rounded-full px-3 py-1 mx-[2px] my-1'>{tag}</div>
        {/each}
    </div>
</a>