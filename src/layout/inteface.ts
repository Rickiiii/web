export interface IMenuList {
  label: string;
  route?: string;
  children?: IMenuList[];
}