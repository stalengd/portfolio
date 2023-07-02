export class Project {
    public name!: string;
    public year!: string;
    public role!: string;
    public tags!: string[];
    public url!: string;
    public imageUrl!: string;
}

export let projects : Project[] = [
    {
        name: 'Rail or Die',
        year: '2021',
        role: 'Author',
        tags: ['unity', 'game', '2d', 'published-game', 'pet-project'],
        url: 'https://www.newgrounds.com/portal/view/826272/',
        imageUrl: 'projects-thumbnails/rail-or-die.png'
    },
    {
        name: 'Gun Survivors',
        year: '2023',
        role: 'Author',
        tags: ['unity', 'game', 'prototype', '2d', 'open-source', 'pet-project'],
        url: 'https://github.com/stalengd/gun-survivors',
        imageUrl: 'projects-thumbnails/gun-survivors.jpg'
    },
    {
        name: 'QuickRuleTileEditor',
        year: '2022',
        role: 'Author',
        tags: ['unity', 'tool', 'open-source', 'pet-project'],
        url: 'https://github.com/stalengd/QuickRuleTileEditor',
        imageUrl: 'https://repository-images.githubusercontent.com/583524797/0a5e594b-e684-409e-b46c-47c8c919479e'
    },
    {
        name: 'Shelter Operator',
        year: '2022',
        role: 'Main Developer',
        tags: ['unity', 'game', 'prototype', '2d', 'jam', 'open-source', 'pet-project'],
        url: 'https://github.com/stalengd/shelter-operator',
        imageUrl: 'projects-thumbnails/shelter-operator.jpg'
    },
    {
        name: 'BWR Impact',
        year: '2022',
        role: 'Author',
        tags: ['unity', 'game', 'prototype', '3d', 'pet-project'],
        url: 'https://stalengames.su/games/bwr-impact/bwr-impact-v0.1.zip',
        imageUrl: 'projects-thumbnails/bwr-impact.jpg'
    },
    {
        name: 'BWR Mission',
        year: '2021',
        role: 'Author',
        tags: ['unity', 'game', 'prototype', '2d', 'pet-project'],
        url: 'https://stalengames.su/games/bwr-mission/bwr-mission-0.0.43/WebGL-Build/',
        imageUrl: 'projects-thumbnails/bwr-mission.jpg'
    },
    {
        name: 'CyberChase',
        year: '2019',
        role: 'Main Developer',
        tags: ['unity', 'game', 'mobile', '3d', 'published-game', 'employment'],
        url: 'https://play.google.com/store/apps/details?id=com.CyberGames.CyberChase',
        imageUrl: 'https://play-lh.googleusercontent.com/c5fKQv2WWh70TOmXzwhN2wPkDP0HcZjy_ugJPyN0MFCKHegFzGGRjf32DonKLKLTC_A=w2560-h1440-rw'
    },
    {
        name: 'Rize of the Summonds',
        year: '2019',
        role: 'Main Developer',
        tags: ['unity', 'game', 'steam', '2d', 'published-game', 'employment'],
        url: 'https://store.steampowered.com/app/1112200/Rize_of_the_Summonds/',
        imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1112200/header.jpg'
    },
    {
        name: 'The Community Studio',
        year: '2018',
        role: 'Author',
        tags: ['unity', 'game', '2d', 'jam', 'pet-project'],
        url: 'https://stalengames.su/games/the-community-studio/1.1/',
        imageUrl: 'projects-thumbnails/the-community-studio.png'
    },
]

export let tags = new Set(projects.flatMap(p => p.tags))