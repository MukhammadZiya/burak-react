import React from "react";
import { Container, Stack, TextField } from "@mui/material";

export default function Products() {
  return (
    <div className="products">
      <Container>
        <Stack
          className="products-main"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Stack className="product-wrapper" direction="row" spacing={2}>
            <span>Burak Restaurant</span>
            <div className="placeholder-input">Type here</div>
          </Stack>

          <Stack className="dishes-filter-section"></Stack>
          <Stack className="list-category-section"></Stack>
          <Stack className="pagination-section"></Stack>
        </Stack>
      </Container>
      <div className="brands-logo"></div>
      <div className="address"></div>
    </div>
  );
}
