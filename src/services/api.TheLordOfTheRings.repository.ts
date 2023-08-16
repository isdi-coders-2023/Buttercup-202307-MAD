import { CardNoId } from '../model/card';
import { Repository } from './repository';

export class ApiCardRepository implements Repository<CardNoId> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async get(pack_code: string): Promise<CardNoId> {
    const url = this.urlBase + '/' + pack_code;
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  }
}
