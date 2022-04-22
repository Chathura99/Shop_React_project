// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import "./Table.css";

// function createData(name, trackingId, date, status) {
//   return { name, trackingId, date, status };
// }

// const rows = [
//   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
//   createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
//   createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
//   createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
// ];

// export default function BasicTable() {
//   return (
//       <div className="Table">
//       <h3>Recent Orders</h3>
//         <TableContainer
//           component={Paper}
//           style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Product</TableCell>
//                 <TableCell align="left">Tracking ID</TableCell>
//                 <TableCell align="left">Date</TableCell>
//                 <TableCell align="left">Status</TableCell>
//                 <TableCell align="left"></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody style={{ color: "white" }}>
//               {rows.map((row) => (
//                 <TableRow
//                   key={row.name}
//                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row">
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="left">{row.trackingId}</TableCell>
//                   <TableCell align="left">{row.date}</TableCell>
//                   <TableCell align="left">
//                     <span className="status" style={makeStyle(row.status)}>{row.status}</span>
//                   </TableCell>
//                   <TableCell align="left" className="Details">Details</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//   );
// }

import * as React from "react";
import "./Table.css";
import ProductService from "../../services/ProductService";
import { useState, useEffect } from "react";

const Table = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts=() => {
    ProductService.getProducts().then((res) => {
        // set variable list
        setProducts(res.data);
      });
  };

  //change style by using status
  const makeStyle = (status) => {
    if (status === "Approved") {
      return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (status === "Pending") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } else {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };

  //reusable col names
  const columns = [
    {
      Header: "Product",
      accessor: "col1",
    },
    {
      Header: "Tracking ID",
      accessor: "col2",
    },
    {
      Header: "Date",
      accessor: "col3",
    },
    {
      Header: "Status",
      accessor: "col4",
    },
    {
      Header: "Details",
      accessor: "col5",
    },
  ];

  return (
    <div>
      {/* <div>
                {data1.map((d) => {
                    <p>{d.id},{d.product}</p>
                })};
            </div> */}

      <h3 style={{ paddingTop: "2rem" }}>Recent Orders</h3>

      <table className="Table">
        <thead>
          <tr>
            {/* get data from this */}
            {columns.map((info) => {
              return (
                <th
                  style={{
                    borderBottom: "solid 3px red",
                    color: "black",
                    fontWeight: "bold",
                    background: "white",
                    padding: "10px",
                  }}
                >
                  {info.Header}
                </th>
              );
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* get data from data.js */}
          {products.map((info) => {
            return (
              <tr>
                <td>{info.product}</td>
                <td>{info.trackingId}</td>
                <td>{info.date}</td>
                {/* chnage style by using status */}
                <td>
                  <span className="status" style={makeStyle(info.status)}>
                    {info.status}
                  </span>
                </td>
                <td className="Details">{info.details}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
};
export default Table;
