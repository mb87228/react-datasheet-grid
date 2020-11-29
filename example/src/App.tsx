import React, { useState } from 'react'

import { DataSheetGrid, textColumn, checkboxColumn } from 'react-datasheet-grid'
import 'react-datasheet-grid/dist/index.css'

const App = () => {
  const [ data, setData ] = useState([
    { active: true, firstName: 'Elon', lastName: 'Musk' },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ])

  const columns = [
    checkboxColumn({ title: 'Active', key: 'active' }),
    textColumn({ title: 'First name', key: 'firstName' }),
    textColumn({ title: 'Last name', key: 'lastName', disabled: ({ rowData }) => !rowData.active, minWidth: 400 }),
    textColumn({ title: 'Role', key: 'role', minWidth: 400 }),
    textColumn({ title: 'Role', key: 'role', minWidth: 300 }),
    textColumn({ title: 'Role', key: 'role', minWidth: 200 }),
    textColumn({ title: 'Role', key: 'role', minWidth: 500 }),
    textColumn({ title: 'Role', key: 'role', minWidth: 300 }),
    textColumn({ title: 'Age', key: 'age', minWidth: 400, disabled: true }),
  ]

  return (
    <div style={{ padding: '50px' }}>
      <DataSheetGrid
        data={data}
        onChange={setData}
        headerRowHeight={100}
        columns={columns}
      />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App
