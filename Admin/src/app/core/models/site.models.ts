import { Flux } from './flux.models';

export class Site {
    id?: number;
    label?: string;
    link?: string;
    unit?: Unit[];
}

export class Unit {
    id?: number;
    label?: string;
    link?: string;
    team?: Team[];
}

export class Team {
    id?: number;
    label?: string;
    link?: string;
    agent?: Agent[];
}
export class Agent {
    id?: number;
    label?: string;
    link?: string;
}
