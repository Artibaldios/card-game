export interface iCard {
  id: number,
  content: string,
  highlighted: boolean,
  status: string,
  row: number,
  col: number,
  live: boolean,
  name: string,
  getImageSrc: () => string
}
export interface Position {
  row: number;
  col: number;
}