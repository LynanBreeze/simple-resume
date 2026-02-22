/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module "*.svelte" {
  const component: any;
  export default component;
}
