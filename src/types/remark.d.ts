declare module "unified" {
  export function unified(): any;
}

declare module "remark-parse" {
  const remarkParse: any;
  export default remarkParse;
}

declare module "remark-gfm" {
  const remarkGfm: any;
  export default remarkGfm;
}

declare module "remark-rehype" {
  const remarkRehype: any;
  export default remarkRehype;
}

declare module "rehype-stringify" {
  const rehypeStringify: any;
  export default rehypeStringify;
}
