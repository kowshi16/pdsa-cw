import React from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Box, styled, Typography, Button } from "@mui/material";

const ProductCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  minWidth: "540px",
  padding: "32px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.15)",
  borderRadius: "18px",
  marginBottom: "32px",
  marginRight: "32px",
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.1)",
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: "600",
}));

const ProductData = [
  {
    id: "P001",
    name: "Sugar",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/Social_Instagram_Stories-NewPackagingProductImages_876x876.jpg?v=1662581871",
    price: 520,
    kg: 1,
  },
  {
    id: "P002",
    name: "Flour",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/Wijaya-Atta-Flour-1kg_876x876.jpg?v=1598195295",
    price: 600,
    kg: 1,
  },
  {
    id: "P003",
    name: "Kurakkan Flour",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/Wijaya-Kurakkan-Flour_800x800.jpg?v=1558093982",
    price: 800,
    kg: 1,
  },
  {
    id: "P004",
    name: "Rice",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/Niru-Roasted-Red-Rice-Flour-1kg_800x800.jpg?v=1556370048",
    price: 500,
    kg: 1,
  },
  {
    id: "P005",
    name: "String Hopper Flour",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/MDK-String-Hopper-Flour-_Red_-700g_800x800.jpg?v=1520877001",
    price: 700,
    kg: 1,
  },
];

const Knapsack = () => {
  return (
    <Sidebar>
      <h1>Maximum profit for 0/1 Knapsack Problem</h1>
      <Box display="flex" flexWrap="wrap">
        {ProductData.map((data) => {
          return (
            <ProductCard key={data.id}>
              <img
                style={{ width: "120px", borderRadius: "50%" }}
                src={data.img}
                alt="grocery"
              />
              <Box>
                <TypographyStyled>{data.name}</TypographyStyled>
                <TypographyStyled sx={{ margin: "14px 0px" }}>
                  Rs. {data.price}.00
                </TypographyStyled>
                <TypographyStyled>{data.kg} Kg</TypographyStyled>
              </Box>
              <Box textAlign="center">
                <ButtonStyled>+</ButtonStyled>
                <TypographyStyled sx={{ margin: "12px 0px" }}>
                  1
                </TypographyStyled>
                <ButtonStyled>-</ButtonStyled>
              </Box>
            </ProductCard>
          );
        })}
      </Box>
    </Sidebar>
  );
};

export default Knapsack;
