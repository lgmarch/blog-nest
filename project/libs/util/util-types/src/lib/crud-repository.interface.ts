export interface ICrudRepository<E, I, R> {
  create(item: E): Promise<R>;
  findById(id: I): Promise<R | null>;
  update(id: I, item: E): Promise<R>;
  delete(id: I): Promise<R>;
}
