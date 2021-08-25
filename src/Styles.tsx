import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme  {
    accent: string,
    lightblue: string,
    background: string,
    backgroundOpacity: string,
    fontOne: string,
    fontTwo: string,
    fontThree:string,
  }
}

export const theme: DefaultTheme = {
  accent: '#2568EB',
  lightblue: '#8C98C0',
  background: '#111322',
  backgroundOpacity: '#1113227d',
  fontOne: '#A8A8A8',
  fontTwo: '#BCBCBC',
  fontThree: '#757575',
}
