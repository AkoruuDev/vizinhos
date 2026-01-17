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
            square: "",
            landscape: "",
            wide: ""
        },
        alt: "",
        isActive: true
    },{
        id: '0o1',
        src: {
            square: "",
            landscape: "",
            wide: ""
        },
        alt: "",
        isActive: true
    },{
        id: '0o1',
        src: {
            square: "",
            landscape: "",
            wide: ""
        },
        alt: "",
        isActive: true
    }
]

export default images
export type { Image }
