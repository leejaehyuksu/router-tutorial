import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import './About.css';

const columns = [

  { id: 'id', label: 'No.', minWidth: 100, minHight: 100, format: (value) => value.toLocaleString('en-US'), },
  { id: 'name', label: '이름', minWidth: 350 },
  { id: 'email', label: '이메일', minWidth: 350 },

  {
    id: 'age',
    label: '나이',
    minWidth: 350,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'password',
    label: '비밀번호',
    minWidth: 350,
    align: 'center',
    format: (value) => value.toFixed(2),
  },


];

export default function UserListTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // 페이징 처리
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // 한 페이지 당 보여줄 row 수
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // 회원목록 가져오기
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("/api/users")
      .then((res) => {
        let userArray = res.data;
        console.log(userArray);
        setUsers(userArray);
      });
  }, []);

  return (
    <Paper id="root">
      <div className="header">
        <h1>회원 리스트</h1>
      </div>
      <TableContainer className="MuiPaper-root makeStyles-root-1 MuiPaper-elevation1 MuiPaper-rounded">
        {/* <div className="serchbar">
          <input type="text" />
          <button>조회</button>
        </div> */}
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}