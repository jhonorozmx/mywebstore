export interface ClientFactory<T> {
    init(): Promise<T>;
}
  