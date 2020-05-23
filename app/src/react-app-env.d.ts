/// <reference types="react-scripts" />

// https://stackoverflow.com/a/60235615
declare module "*.mp3" {
  const src: string
  export default src
}
