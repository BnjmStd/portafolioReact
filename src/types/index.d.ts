export interface RootObject {
    basics: Basics;
    work: Work[];
    volunteer: Volunteer[];
    education: Education[];
    awards: Award[];
    certificates: Certificate[];
    publications: Publication[];
    skills: Skill[];
    languages: Language[];
    references: Reference[];
    projects: Project[];
}

export interface Project {
    name: string;
    isActive: boolean;
    description: string;
    highlights: string[];
    url: string;
}

export interface Reference {
    name: string;
    reference: string;
}

export interface Language {
    language: string;
    fluency: string;
}

export interface Skill {
    name: string;
    level: string;
    keywords: string[];
    icon: string;
}

export interface Publication {
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
}

export interface Certificate {
    name: string;
    date: string;
    issuer: string;
    url: string;
}

export interface Award {
    title: string;
    date: string;
    awarder: string;
    summary: string;
}

export interface Education {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
}

export interface Volunteer {
    organization: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface Work {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate?: string;
    summary: string;
    highlights: string[];
}

export interface Basics {
    name: string;
    label: string;
    availableForWork: string;
    image: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: Location;
    profiles: Profile[];
}

export interface Profile {
    network: string;
    username: string;
    url: string;
}

export interface Location {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}