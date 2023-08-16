export interface Repository<T extends { pack_code: string }> {
  get(_pack_code: T['pack_code']): Promise<T>;
}
