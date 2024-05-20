export abstract class Storages<T> {
   protected readonly STORAGE_KEY: string;
   
   public constructor(storageKey: string) {
      this.STORAGE_KEY = storageKey;

      // this.init();
   }

   public abstract getItems(): T[];
   public abstract setItems(items: T[]): void;
   public abstract clearItems(): void;
   // protected abstract init(): void;

}