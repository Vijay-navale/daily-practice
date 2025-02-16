import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import closeIcon from './close.webp';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const filterCloseCustomInput = () => {
  <>
    <input type='text' />
    <img src={closeIcon} alt='' />
  </>;
};

const ReactAgGridComp = () => {
  const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'sdvdfs', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);
  const [columnDefs] = useState([
    { field: 'make', filter: filterCloseCustomInput },
    { field: 'model' },
    { field: 'price' },
  ]);

  return (
    <div className='ag-theme-alpine' style={{ height: 400, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default ReactAgGridComp;
