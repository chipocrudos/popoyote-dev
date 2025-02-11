export type Link = {
    name: string;
    url: string;
};


export type FooterLink = {
    section: string;
    links: Link[];
};

export type Icon = {
    name: string;
    assets: string;
    url: string;
    color: string;
};