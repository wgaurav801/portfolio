/**
 * Next ships type declarations for `*.module.css` but not for plain
 * stylesheet side-effect imports. TypeScript 6 reports those as TS2882, so
 * the global stylesheet needs an ambient declaration.
 */
declare module '*.css';
