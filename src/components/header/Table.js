import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  TablePagination,
  Checkbox,
} from "@mui/material";
import "./table.css";
import sort from "../../Assets/filter/sort.svg";
import rectangle from "../../Assets/filter/Rectangle.svg";

const productList = [
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    stock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "₦725,000.00",
    stock: 12,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "₦125,000.00",
    stock: 0,
    discount: "₦0.00",
    totalValue: "₦0.00",
    status: "Unpublished",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    stock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "₦725,000.00",
    stock: 12,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "₦125,000.00",
    stock: 0,
    discount: "₦0.00",
    totalValue: "₦0.00",
    status: "Unpublished",
  },
  {
    name: "iPhone 13 Pro",
    category: "Gadgets",
    unitPrice: "₦1,225,000.00",
    stock: 8,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "iPhone 12 Pro",
    category: "Gadgets",
    unitPrice: "₦725,000.00",
    stock: 12,
    discount: "₦0.00",
    totalValue: "₦50,000.00",
    status: "Published",
  },
  {
    name: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "₦125,000.00",
    stock: 0,
    discount: "₦0.00",
    totalValue: "₦0.00",
    status: "Unpublished",
  },
  {
    name: "Polo T-Shirt",
    category: "Fashion",
    unitPrice: "₦125,000.00",
    stock: 0,
    discount: "₦0.00",
    totalValue: "₦0.00",
    status: "Unpublished",
  },
  // Add more items as needed
];

const ProductTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleSelectProduct = (event, index) => {
    const newSelectedProducts = [...selectedProducts];
    if (event.target.checked) {
      newSelectedProducts.push(index);
    } else {
      const removeIndex = newSelectedProducts.indexOf(index);
      if (removeIndex !== -1) {
        newSelectedProducts.splice(removeIndex, 1);
      }
    }
    setSelectedProducts(newSelectedProducts);
  };

  return (
    <section className="table-container">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ padding: "0px 16px" }}>
                <Checkbox
                  inputProps={{ "aria-label": "select all products" }}
                />
              </TableCell>
              <TableCell sx={{ padding: "0px 16px" }}>
                <p>
                  Product Name{" "}
                  <img className="sort-image" src={sort} alt="sort" />{" "}
                </p>
              </TableCell>
              <TableCell sx={{ padding: "0px 16px" }}>
                <p>
                  Category <img className="sort-image" src={sort} alt="sort" />
                </p>
              </TableCell>
              <TableCell sx={{ padding: "0px 16px" }}>
                <p>
                  Unit Price{" "}
                  <img className="sort-image" src={sort} alt="sort" />
                </p>
              </TableCell>
              <TableCell sx={{ padding: "0px 16px" }}>
                <p>
                  In-Stock <img className="sort-image" src={sort} alt="sort" />
                </p>
              </TableCell>
              <TableCell sx={{ padding: "0px 16px" }}>
                <p>
                  Discount
                  <img className="sort-image" src={sort} alt="sort" />
                </p>
              </TableCell>
              <TableCell sx={{ padding: "0px 16px" }}>
                <p>
                  Total Value
                  <img className="sort-image" src={sort} alt="sort" />
                </p>
              </TableCell>
              <TableCell sx={{ padding: "0px 16px" }}>
                <p>
                  Action <img className="sort-image" src={sort} alt="sort" />
                </p>
              </TableCell>
              <TableCell sx={{ padding: "0px 16px" }}>
                <p>
                  Status <img className="sort-image" src={sort} alt="sort" />
                </p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product, index) => (
                <TableRow
                  sx={{ "& td": { padding: "0px 16px", borderBottom: "none" } }}
                  key={index}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedProducts.includes(index)}
                      onChange={(event) => handleSelectProduct(event, index)}
                      inputProps={{
                        "aria-label": `select product ${product.name}`,
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    {" "}
                    {/* <img className="iphone-img" src={rectangle} />{" "} */}
                    {product.name}
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.unitPrice}</TableCell>
                  <TableCell>
                    {product.stock > 0 ? product.stock : "Out of Stock"}
                  </TableCell>
                  <TableCell>{product.discount}</TableCell>
                  <TableCell>{product.totalValue}</TableCell>
                  <TableCell>
                    <select className="table-select" value="Publish">
                      <option value="Publish">Publish</option>
                      <option value="Unpublish">Unpublish</option>
                    </select>
                  </TableCell>
                  <TableCell>
                    <button
                      className={
                        product.status === "Published"
                          ? "published"
                          : "not-published"
                      }
                    >
                      {product.status}{" "}
                    </button>
                    {/* <Chip
                      label={product.status}
                      backgroundColor={
                        product.status === "Published" ? "#5570F129" : "#FFF2E2"
                      }
                      variant="outlined"
                    /> */}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow sx={{ "& td": { borderTop: "1px solid grey" } }}>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50]}
                count={productList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                labelRowsPerPage="Items per page"
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </section>
  );
};

export default ProductTable;
