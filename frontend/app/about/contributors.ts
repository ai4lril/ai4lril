export interface Contributor {
    name: string;
    role: string;
    interests: string[];
    bio: string;
    photoUrl?: string;
}

export const contributors: Contributor[] = [
    {
        name: "Alvyn Abranches",
        role: "Assistant Professor, PhD Scholar",
        interests: [
            "Computational Socio-Linguistics",
            "Low-Resourced Languages",
            "Zero-Resourced Scripts",
        ],
        bio: "Alvyn Abranches is a dedicated designer and researcher working at the intersection of design and computational linguistics. He develops innovative solutions to support and preserve languages that lack substantial computational resources, bridging technology and linguistics to document and revitalize underrepresented languages.",
    },
];
