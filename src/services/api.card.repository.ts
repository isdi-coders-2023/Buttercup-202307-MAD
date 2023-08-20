import { Card } from '../model/card';
import { Repository } from './repository';

export class ApiCardRepository implements Repository<Card> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async getAll(): Promise<Card[]> {
    const response = await fetch(this.urlBase);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
  async get(code: string): Promise<Card[]> {
    const url = this.urlBase + '/' + code;
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
}
