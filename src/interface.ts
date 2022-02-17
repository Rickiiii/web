export interface ILabelValue {
  label: string;
  value: string | number;
}

export interface ILocation {
  location: { query: { id: string; [propsName: string]: string } };
}
