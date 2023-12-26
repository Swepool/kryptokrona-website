import { dev } from "$app/environment";

export const supplyUrl: string = dev ? 'http://localhost:5173/api/supply' : 'https://kryptokrona.org/api/supply'

export interface Node {
  id: number;
  name: string;
  url: string;
  port: number;
  ssl: boolean;
}
export const stableNodes: Node[] = [
  {
    id: 1,
    name: 'Blocksum',
    url: 'blocksum.org',
    port: 11898,
    ssl: false
  },
  {
    id: 2,
    name: 'TechyNode',
    url: 'techy.ddns.net',
    port: 11898,
    ssl: false
  },
  {
    id: 3,
    name: 'Privacy Mine',
    url: 'privacymine.net',
    port: 11898,
    ssl: false
  },
  {
    id: 4,
    name: 'XKR Network',
    url: 'node.xkr.network',
    port: 80,
    ssl: false
  }
]