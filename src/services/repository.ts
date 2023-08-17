export interface Repository<T extends { pack_code: string }> {
  getAll(): Promise<T[]>;
  get(_pack_code: T['pack_code']): Promise<T>;
}
