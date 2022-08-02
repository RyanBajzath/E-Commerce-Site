//Importing everything from package.json
import styled from "styled-components";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";

//Importing all useContexts
import { ItemContext } from "../context/Context";

//importing icons
import { Icon } from "react-icons-kit";
import { ic_add_shopping_cart } from "react-icons-kit/md/ic_add_shopping_cart";

export const CompanyPage = () => {
  const { companyId } = useParams();
  const { addItemNumber, setCompanyInfo, companyProducts, setCompanyProducts } =
    useContext(ItemContext);

  useEffect(() => {
    axios
      .get(`/api/companies/${companyId}`)
      .then((res) => {
        console.log(res);
        setCompanyInfo(res.data.companyInfo);
        setCompanyProducts(res.data.companyProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {companyProducts ? (
        <Wrapper>
          <GridContainer>
            {companyProducts.map((product) => {
              return (
                <>
                  <GridItem to={`/shop/items/${product._id}`}>
                    <ItemHead>
                      <ItemImage src={product.imageSrc} />
                    </ItemHead>
                    <ItemBody>
                      <ItemName>{product.name}</ItemName>
                      <ItemLocation>{product.body_location}</ItemLocation>
                      <ItemCategory>{product.category}</ItemCategory>
                      <ButtonSideDiv>
                        <ItemPrice>{product.price}</ItemPrice>
                        <AddToCartButton onClick={(e) => addItemNumber(e)}>
                          <Icon size={25} icon={ic_add_shopping_cart} />
                        </AddToCartButton>
                      </ButtonSideDiv>
                    </ItemBody>
                  </GridItem>
                </>
              );
            })}
          </GridContainer>
        </Wrapper>
      ) : (
        <AlternateDiv>Loading.....</AlternateDiv>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 100%;
  left: 10vw;
  top: 8vh;
  display: flex;
  justify-content: space-between;
`;

const GridContainer = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  background-color: whitesmoke;
`;
const GridItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  width: 320px;
  height: 500px;
  margin: 15px auto;
  border-radius: 25px;
  transition: 0.5s ease-in-out;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 2px 6px 2px 2px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const ItemHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 252px;
  background: #fa782e;
  /* Old browsers */
  background: white;
  /* FF3.6-15 */
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fa782e', endColorstr='#c82930', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
  border-radius: 25px 25px 0 0;
  overflow: hidden;
`;

const ItemImage = styled.img`
  position: absolute;
  left: 0;
  margin-top: 5px;
  margin-left: 50px;
`;

const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 50%;
  padding: 15px;
  overflow: hidden;
`;

const ItemName = styled.h3`
  padding: 10px;
`;
const ItemCategory = styled.h4`
  padding: 5px;
`;
const ItemLocation = styled.h5`
  padding: 5px;
`;
const ItemPrice = styled.h4`
  padding: 0 5px;
  display: inline-block;

  width: auto;
  height: 38px;

  background-color: #6ab070;
  -webkit-border-radius: 3px 4px 4px 3px;
  -moz-border-radius: 3px 4px 4px 3px;
  border-radius: 3px 4px 4px 3px;

  border-left: 1px solid #6ab070;

  /* This makes room for the triangle */
  margin-left: 19px;

  position: relative;

  color: white;
  font-weight: 300;
  font-size: 22px;
  line-height: 38px;

  padding: 0 10px 0 10px;

  &:before {
    content: "";
    position: absolute;
    display: block;
    left: -19px;
    width: 0;
    height: 0;
    border-top: 19px solid transparent;
    border-bottom: 19px solid transparent;
    border-right: 19px solid #6ab070;
  }

  &:after {
    content: "";
    background-color: white;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    display: block;
    position: absolute;
    left: -9px;
    top: 17px;
  }
`;

const ButtonSideDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  /* align-items: flex-start; */
  width: 100%;
  /* height: 50px; */
  /* padding-left: 50px; */

  align-items: center;
`;

const AddToCartButton = styled.button`
  /* margin: 10px; */
  background-color: red;
  color: white;
  width: 50px;
  border: none;
  padding: 5px;
  margin-left: 25%;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const AlternateDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  z-index: 2;
`;
