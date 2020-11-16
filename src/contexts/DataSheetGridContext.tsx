import * as React from 'react'
import { GridContext } from '../typings'

export const DataSheetGridContext = React.createContext<GridContext>({
  focus: false,
  activeCell: null,
  headerRowHeight: 0,
  rowHeight: 0,
  columnWidths: [],
  data: [],
  columns: [],
  selection: null,
  editing: false,
  onChange: () => null,
  isCellDisabled: () => false,
})