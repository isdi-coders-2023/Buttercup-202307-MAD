import { Expansion } from '../model/expansion';
import { Repository } from './repository';

export class ApiExpansionRepository implements Repository<Expansion> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(): Promise<Expansion[]> {
    const response = await fetch(this.urlBase);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
  async get(code: string): Promise<Expansion> {
    const url = this.urlBase + code + `.json`;
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
}
