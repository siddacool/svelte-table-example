type CellCallbackFunction = (state: any, columns?: any[]) => any;
type HeaderCallbackFunction = (columnData: {
  title: string;
  id: string;
}) => any;

export interface ITableColumn {
  id: string;
  title: string;
  Cell?: CellCallbackFunction;
  Header?: HeaderCallbackFunction;
}
