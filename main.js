// var gridOptions = {
//     columnDefs: [
//         { field: "athlete", width: 200,
//          pinned: 'left',
//         },
//         { field: "age", width: 90 },
//         { field: "country", width: 150 },
//         { field: "year", width: 90 },
//         { field: "date", width: 150 },
//         { field: "sport", width: 150 },
//         { field: "gold", width: 150 },
//         { field: "silver", width: 150 },
//         { field: "bronze", width: 100 },
//         { field: "total", width: 100 },
//         { field: "Extra One", width: 100 },
//         { field: "Extra Two", width: 100 },
//       { field: "total", width: 100 },
//     ],
// };
var columnDefs = [
  {
    headerName: ' ',
    headerCheckboxSelection: true,
    checkboxSelection: true,
    floatingFilter: true,
    // suppressMenu: true,
    // minWidth: 50,
    // maxWidth: 50,
    //width: 50,
    flex: 0,
    enableColResize: true,
    sortable: true,
    editable: false,
    enableFilter: true,
    //suppressColumnsToolPanel: true,
  },
  { field: 'athlete', enableSorting: true,},
  { field: 'country', minWidth: 150 },
  { field: "sport", width: 150 },
  { field: "gold", width: 150 },
  { field: "silver", width: 150},
    { field: "date", width: 150 },
  { field: 'year', filter: 'agNumberColumnFilter' },
];

var gridOptions = {
  rowData: null,
  columnDefs: columnDefs,
  rowSelection: 'multiple',
  suppressRowClickSelection: true,
  rowDeselection: true,
  headerHeight: 40,
  defaultColDef: {
    editable: true,
    sortable: true,
    enableFilter: true,
    enableColResize: true,
    floatingFilter: true,
    flex: 1,    
  }
};

function fillLarge() {
    setHeight('100%');
}

function fillMedium() {
    setHeight('60%');
}

function fillExact() {
    setHeight('200px');
}

function setHeight(size) {
    var eGridDiv = document.querySelector('#myGrid');
    // eGridDiv.style.setProperty('width', size);
    eGridDiv.style.setProperty('height', size);
    gridOptions.api.doLayout();
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({ url: 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json' })
        .then(function(data) {
            gridOptions.api.setRowData(data);
        });
});
