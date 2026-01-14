export interface Issue {
    id: string;
    title: string;
    description: string;
    tags: string[];
    status: 'Open' | 'In Progress' | 'Solved';
    upvotes: number;
    githubUrl?: string;
    createdBy?: string;
}
