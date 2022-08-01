import { useContext } from "react";

import { ItemContext } from "../context/Context";

import styled from "styled-components";
import SideBar from "./SideBar";
import { NavLink } from "react-router-dom";

const ShopPage = () => {
  const { items} = useContext(ItemContext);

  console.log("items here", items);

  return (
    <Wrapper>
      <SideBar />
      <GridContainer>
        {items.map((item) => {
          return (
            <>
              <GridItem to={`/shop/items/${item._id}`}>
                <ItemHead>
                  <ItemImage src={item.imageSrc} />
                </ItemHead>
                <ItemBody>
                <ItemName>{item.name}</ItemName>
                <ItemLocation>{item.body_location}</ItemLocation>
                <ItemCategory>{item.category}</ItemCategory>
                <ItemPrice>${item.price}</ItemPrice>
                </ItemBody>
                <ButtonSideDiv>
                  <AddToCartButton>Add to Cart</AddToCartButton>
                </ButtonSideDiv>
              </GridItem>
            </>
          );
        })}
      </GridContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
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
  width: 300px;
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
  height: auto;
  padding: 15px;
`

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
  padding: 5px;
`;

const ButtonSideDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 50px;
`

const AddToCartButton = styled.button`
  margin: 5px;
  padding: 5px;
`


export default ShopPage;
