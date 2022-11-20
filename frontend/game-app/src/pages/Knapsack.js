import React, { useEffect } from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Box, styled, Typography, Button } from "@mui/material";
import Swal from "sweetalert2";
import productDataStore from "../lib/productData";
import { getWeights,getProfits, knapsackProblem } from "../components/api/knapsackAPI";
import Loading from "../components/core/Loading";

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
  textTransform: "capitalize"
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
    name: "sugar",
    img: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/117191--1--1595325882.jpeg",
    price: 0,
    kg: 0,
    active: true,
  },
  {
    id: "P002",
    name: "milk",
    img: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/100219--01--1549602154.jpeg",
    price: 0,
    kg: 0,
    active: true,
  },
  {
    id: "P003",
    name: "flour",
    img: "https://cdn.shopify.com/s/files/1/2671/1426/products/Wijaya-Kurakkan-Flour_800x800.jpg?v=1558093982",
    price: 0,
    kg: 0,
    active: true,
  },
  {
    id: "P004",
    name: "rice",
    img: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/113857--1--1559751980.jpeg",
    price: 0,
    kg: 0,
    active: true,
  },
  {
    id: "P005",
    name: "fruits",
    img: "https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-fruit-medley.png?rev=1416123f2d094cd1b7494365948214be&hash=F89C9786C9A5F599A784D7753F82236C",
    price: 0,
    kg: 0,
    active: true,
  },
];

const Knapsack = () => {
  const [products, setProducts] = React.useState(ProductData);
  const [cardProducts, setCardProducts] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [totalData, setTotalData] = React.useState({
    totalPrice: 0,
    totalWeight: 0,
  });
  const playerName = window.localStorage.getItem("Name");
  const weightItem = [];
  let profitItem = [];

  console.log("products >>>>>>",products);

  useEffect(() => {
   const getWeight = async( ) => {
    let latestProductsData = [];
    getWeights().then((res) => {
      const weightData = res.data;
        for(var i in weightData){
          products.filter((data) => {
            if(data.name === i) {
                data.kg = weightData[i];
                latestProductsData.push(data);
            }
          })
        }
        setProducts(latestProductsData);
    });
   }

   const getPrice = async() => {
    let latestProductsData = [];
    getProfits().then((res) => {
      const weightData = res.data;
        for(var i in weightData){
          products.filter((data) => {
            if(data.name === i) {
                data.price = weightData[i];
                latestProductsData.push(data);
            }
          })
        }
        setProducts(latestProductsData);
        setisLoading(false);
    });
   }

   getWeight();
   getPrice();

   return () => clearInterval(getWeight);
  }, [isLoading]);

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
    if(totalData.totalWeight + kg > 10){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Maximum 10kgs!',
      });

      return ;
  }
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

  const handleSubmit = () => {
    products.map((product) => {
      weightItem.push(product.kg);
      profitItem.push(product.price);
     });
    console.log("weight items >>>>>>>>>", weightItem);
    console.log("profit items >>>>>>>>>", profitItem);

    const payload = {
      weightItems: weightItem,
      profitItems: profitItem,
      userTotalProfit: totalData.totalPrice,
      name: playerName
    };
    console.log("payload >>>>>>>>>", payload);
    knapsackProblem(payload)
      .then((res) => {
        res.data === "Congratulations! Your answer is correct!" ? (
          Swal.fire({
            title: "Successful",
            text: res.data,
            icon: "success",
          }).then(function () {
            window.location.reload();
          })
        ) : (
          Swal.fire({
            title: "Incorrect",
            text: res.data,
            icon: "error",
          })
        )
        console.log(res.data);
      })
      .catch((error) => {
        Swal.fire({
          title: "Something went wrong",
          text: "Sorry an error occurred. Please try again.",
          icon: "warning",
        });
        console.log(error);
      });  
  };
 
  const handleReset = () => {
      Swal.fire({
        title: "Reset",
        text: "Successfully reset",
        icon: "success",
      }).then(function () {
        window.location.reload();
      });
      setCardProducts([]);
      setProducts(productDataStore);
      totalData({
        totalPrice: 0,
        totalWeight: 0,
      });
    };
  

  return (<>
  <Loading status={isLoading} />
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
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    <br />
                    <button
                      className="btn"
                      style={{ marginTop: "24px", minWidth: "140px" }}
                      onClick={handleReset}
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
    </>
  );
};

export default Knapsack;
