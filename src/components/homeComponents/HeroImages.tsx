import hero1Square from "@/assets/Heros/hero1-square.png";
import hero1Landscape from "@/assets/Heros/hero1-landscape.png";
import hero1Wide from "@/assets/Heros/hero1-wide.png";

import hero2Square from "@/assets/Heros/hero2-square.png";
import hero2Landscape from "@/assets/Heros/hero2-landscape.png";
import hero2Wide from "@/assets/Heros/hero2-wide.png";

import hero3Square from "@/assets/Heros/hero3-square.png";
import hero3Landscape from "@/assets/Heros/hero3-landscape.png";
import hero3Wide from "@/assets/Heros/hero3-wide.png";

interface Image {
    id: string,
    src: {
        square: string,
        landscape: string,
        wide: string,
    },
    alt: string,
    link?: string,
    isActive: boolean
}

const images: Image[] = [
    {
        id: '0o1',
        src: {
            square: hero1Square,
            landscape: hero1Landscape,
            wide: hero1Wide
        },
        alt: "Hero 1",
        isActive: true
    },{
        id: '0o2',
        src: {
            square: hero2Square,
            landscape: hero2Landscape,
            wide: hero2Wide
        },
        alt: "Hero 2",
        isActive: true
    },{
        id: '0o3',
        src: {
            square: hero3Square,
            landscape: hero3Landscape,
            wide: hero3Wide
        },
        alt: "Hero 3",
        isActive: true
    }
]

export default images
export type { Image }
