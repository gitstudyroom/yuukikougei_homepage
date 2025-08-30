declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

declare namespace __WebpackModuleApi {
  interface RequireContext {
    keys(): string[];
    (id: string): any;
    <T>(id: string): T;
    resolve(id: string): string;
  }
}