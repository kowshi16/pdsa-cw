import React from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Box, styled, Typography, Button } from "@mui/material";
import Swal from "sweetalert2";
import productDataStore from "../lib/productData";

const ProductCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  minWidth: "560px",
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

const CardProductCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  // padding: "32px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.15)",
  borderRadius: "18px",
  width: "100%",
  marginBottom: "24px",
}));

const ProductData = [
  {
    id: "P001",
    name: "Sugar",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/Social_Instagram_Stories-NewPackagingProductImages_876x876.jpg?v=1662581871",
    price: 520,
    kg: 1,
    active: true,
  },
  {
    id: "P002",
    name: "Flour",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/Wijaya-Atta-Flour-1kg_876x876.jpg?v=1598195295",
    price: 600,
    kg: 1,
    active: true,
  },
  {
    id: "P003",
    name: "Kurakkan Flour",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/Wijaya-Kurakkan-Flour_800x800.jpg?v=1558093982",
    price: 800,
    kg: 1,
    active: true,
  },
  {
    id: "P004",
    name: "Rice",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/Niru-Roasted-Red-Rice-Flour-1kg_800x800.jpg?v=1556370048",
    price: 500,
    kg: 1,
    active: true,
  },
  {
    id: "P005",
    name: "String Hopper Flour",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/MDK-String-Hopper-Flour-_Red_-700g_800x800.jpg?v=1520877001",
    price: 700,
    kg: 1,
    active: true,
  },
];

const Knapsack = () => {
  const [products, setProducts] = React.useState(ProductData);
  const [cardProducts, setCardProducts] = React.useState([]);
  const [totalData, setTotalData] = React.useState({
    totalPrice: 0,
    totalWeight: 0,
  });

  const handleAddToCard = (id) => {
    let price = 0;
    let kg = 0;

    const selectProduct = products.filter((product) => {
      if (product.id === id) {
        product.active = false;
        price = product.price;
        kg = product.kg;
      }
      return product.id === id;
    });
    setCardProducts([...cardProducts, selectProduct[0]]);

    const latestPrice = totalData.totalPrice + price;
    const latestWeight = totalData.totalWeight + kg;
    setTotalData({
      totalPrice: latestPrice,
      totalWeight: latestWeight,
    });
  };

  const handleRemoveProductCard = (id) => {
    let price = 0;
    let kg = 0;

    const selectProduct = cardProducts.filter((data) => {
      return data.id !== id;
    });

    setCardProducts(selectProduct);

    products.filter((data) => {
      if (data.id === id) {
        data.active = true;
        price = data.price;
        kg = data.kg;
      }
    });

    let latestPrice = totalData.totalPrice - price;
    let latestWeight = totalData.totalWeight - kg;
    if (latestPrice < 0) {
      latestPrice = 0;
    }
    setTotalData({
      totalPrice: latestPrice,
      totalWeight: latestWeight,
    });
  };

  return (
    <Sidebar>
      <h1>Maximum profit for 0/1 Knapsack Problem</h1>
      <Box display="flex" flex-wrap>
        <Box display="flex" flexDirection="column" width="560px">
          {products.map((data) => {
            return (
              <ProductCard key={data.id}>
                <img
                  style={{ maxWidth: "120px" }}
                  src={data.img}
                  alt="grocery"
                />
                <Box minWidth="200px">
                  <TypographyStyled>{data.name}</TypographyStyled>
                  <TypographyStyled sx={{ margin: "14px 0px" }}>
                    Rs. {data.price}.00
                  </TypographyStyled>
                  <TypographyStyled>{data.kg} Kg</TypographyStyled>
                </Box>
                <Box textAlign="center">
                  {/* <ButtonStyled>+</ButtonStyled>
                  <TypographyStyled sx={{ margin: "12px 0px" }}>
                    0
                  </TypographyStyled>
                  <ButtonStyled>-</ButtonStyled> */}
                  {data.active && totalData.totalWeight < 10 && (
                    <ButtonStyled onClick={() => handleAddToCard(data.id)}>
                      Add to cart
                    </ButtonStyled>
                  )}
                </Box>
              </ProductCard>
            );
          })}
        </Box>
        <Box ml="18px" mr="18px">
          <ProductCard>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Typography
                sx={{ fontWeight: "600", textAlign: "center", width: "100%" }}
                variant="h4"
                mb="14px"
              >
                Card
              </Typography>
              <Box>
                {cardProducts.length >= 1 && (
                  <>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "14px",
                        margin: 0,
                        marginBottom: "12px",
                      }}
                    >
                      Maximum 10Kg
                    </p>
                    <Typography
                      mb="16px"
                      sx={{
                        fontSize: "24px",
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      Total Price: <b>Rs {totalData.totalPrice}.00</b>
                    </Typography>
                    <Typography
                      mb="16px"
                      sx={{
                        fontSize: "24px",
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      Total Weight: <b>{totalData.totalWeight} Kg</b>
                    </Typography>
                  </>
                )}
                {cardProducts.length >= 1 ? (
                  cardProducts.map((data) => {
                    return (
                      <CardProductCard key={data.id}>
                        <img
                          style={{ maxWidth: "80px" }}
                          src={data.img}
                          alt="grocery"
                        />
                        <Box minWidth="200px">
                          <TypographyStyled>{data.name}</TypographyStyled>
                          <TypographyStyled sx={{ margin: "4px 0px" }}>
                            Rs. {data.price}.00
                          </TypographyStyled>
                          <TypographyStyled>{data.kg} Kg</TypographyStyled>
                        </Box>
                        <Box textAlign="center">
                          {!data.active && (
                            <ButtonStyled
                              onClick={() => handleRemoveProductCard(data.id)}
                            >
                              remove
                            </ButtonStyled>
                          )}
                        </Box>
                      </CardProductCard>
                    );
                  })
                ) : (
                  <Typography
                    sx={{
                      fontSize: "24px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    No products
                  </Typography>
                )}
                {cardProducts.length >= 1 && (
                  <Box width="100%" textAlign="center">
                    <button
                      className="btn"
                      style={{
                        marginTop: "24px",
                        minWidth: "140px",
                      }}
                      onClick={() => {
                        Swal.fire({
                          title: "Submit",
                          text: "Successfully submitted",
                          icon: "success",
                        });
                      }}
                    >
                      Submit
                    </button>
                    <br />
                    <button
                      className="btn"
                      style={{ marginTop: "24px", minWidth: "140px" }}
                      onClick={() => {
                        Swal.fire({
                          title: "Reset",
                          text: "Successfully reset",
                          icon: "success",
                        });
                        setCardProducts([]);
                        setProducts(productDataStore);
                        totalData({
                          totalPrice: 0,
                          totalWeight: 0,
                        });
                      }}
                    >
                      reset
                    </button>
                  </Box>
                )}
              </Box>
            </Box>
          </ProductCard>
        </Box>
      </Box>
    </Sidebar>
  );
};

export default Knapsack;
