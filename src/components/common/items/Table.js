import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { createTableData } from "../../functions/CreateTableData";
import rangeFilterForTable from "../../functions/RangeFilterForTable";
import { Spinner } from "./Spinner";
import "./Table.scss";

export default function BasicTable({
  status,
  arrays,
  counters,
  selectedArr,
  rangeFilter,
  valueToFixed,
}) {
  const [sortTable, setSortTable] = useState("quantityDown");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tempRange, setTempRange] = useState([]);
  useEffect(() => {
    drawTable();
    if (tempRange !== rangeFilter) {
      setPage(0);
      setTempRange(rangeFilter);
    }
  }, [sortTable, page, rowsPerPage, status, selectedArr, rangeFilter]);

  function drawTable() {
    const rows = [];

    if (status === 2) {
      // create data for table
      for (let i = 0; i < arrays.length; i++) {
        if (selectedArr === i) {
          for (let data of arrays[i]) {
            const name = data[0];
            const quantity = data[1];
            const percentage = (quantity * 100) / counters[i];
            rows.push(createTableData(name, quantity, percentage));
          }
        }
      }
      // draw table header
      const drawHeader = () => {
        return (
          <TableHead>
            <TableRow>
              <TableCell
                onClick={() => {
                  sortName();
                }}
              >
                <div className="cell__content name">
                  Imię{sortTable === "nameDown" && <ArrowDownwardIcon />}
                  {sortTable === "nameUp" && <ArrowUpwardIcon />}
                </div>
              </TableCell>
              <TableCell
                className="tHead"
                onClick={() => {
                  sortQuantity();
                }}
                align="right"
              >
                <div className="cell__content">
                  {sortTable === "quantityDown" && <ArrowDownwardIcon />}
                  {sortTable === "quantityUp" && <ArrowUpwardIcon />}
                  Ilość
                </div>
              </TableCell>
              <TableCell
                className="tHead"
                onClick={() => {
                  sortPercentage();
                }}
                align="right"
                justify="center"
                item="center"
                width="30"
              >
                {" "}
                <div className="cell__content">
                  {sortTable === "percentageDown" && <ArrowDownwardIcon />}
                  {sortTable === "percentageUp" && <ArrowUpwardIcon />}%
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
        );
      };
      // draw table body
      const drawBody = () => {
        return (
          <TableBody>
            {rows
              .filter((row, index) => {
                return (
                  index >= rangeFilterForTable(rows, rangeFilter)[0] &&
                  index <= rangeFilterForTable(rows, rangeFilter)[1]
                );
              })
              .sort((a, b) => {
                if (sortTable === "quantityUp") {
                  return a.nameQuantity - b.nameQuantity;
                } else if (sortTable === "quantityDown") {
                  return b.nameQuantity - a.nameQuantity;
                } else if (sortTable === "percentageUp") {
                  return a.namePercentage - b.namePercentage;
                } else if (sortTable === "percentageDown") {
                  return b.namePercentage - a.namePercentage;
                } else if (sortTable === "nameDown") {
                  return a.name.localeCompare(b.name);
                } else if (sortTable === "nameUp") {
                  return b.name.localeCompare(a.name);
                }
                return 0;
              })

              .filter((row, index) => {
                return (
                  index >= page * rowsPerPage &&
                  index < page * rowsPerPage + rowsPerPage
                );
              })
              .map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.nameQuantity}</TableCell>
                  <TableCell align="right">
                    {parseFloat(row.namePercentage).toFixed(valueToFixed)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        );
      };
      const drawFooter = () => {
        return (
          <TableFooter>
            <TableRow>
              <TablePagination
                className="table__footer"
                rowsPerPageOptions={[5, 10, 20]}
                colSpan={3}
                count={
                  rangeFilterForTable(rows, rangeFilter)[1] -
                  rangeFilterForTable(rows, rangeFilter)[0] +
                  1
                }
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        );
      };
      return (
        <>
          {drawHeader()}
          {drawBody()}
          {drawFooter()}
        </>
      );
    }
  }
  function sortName() {
    if (sortTable === "nameDown") {
      setSortTable("nameUp");
    } else if (sortTable === "nameUp") {
      setSortTable("nameDown");
    } else {
      setSortTable("nameDown");
    }
  }
  function sortQuantity() {
    if (sortTable === "quantityDown") {
      setSortTable("quantityUp");
    } else if (sortTable === "quantityUp") {
      setSortTable("quantityDown");
    } else {
      setSortTable("quantityDown");
    }
  }

  function sortPercentage() {
    if (sortTable === "percentageDown") {
      setSortTable("percentageUp");
    } else if (sortTable === "percentageUp") {
      setSortTable("percentageDown");
    } else {
      setSortTable("percentageDown");
    }
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }

  return (
    <>
      {status !== 2 ? (
        <Spinner />
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">{drawTable()}</Table>{" "}
        </TableContainer>
      )}
    </>
  );
}
