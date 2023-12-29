export interface Job {
    title: string,
    period: {
        beginYear: Date,
        endYear: Date,
        duration: number;
        durationUnit: 'M' | 'Y'
    },
    client: string,
    city: string,
    project: string,
    description: string,
    teamsAndMethods: string,
    tasks: string[],
    toolsAndTechnologies: string[]
}
