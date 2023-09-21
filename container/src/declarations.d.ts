declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module 'auth/*';
declare module 'shop/*';
declare module 'cart/*';
declare module 'utilityFunctions/*';
declare module 'uiComponents/*';
declare module 'providers/*';
