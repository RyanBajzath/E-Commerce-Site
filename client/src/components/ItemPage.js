// this page will show the indivdual items information after being clicked on/
import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ItemContext } from "../context/Context";

const ItemPage = () => {

  const {singleItem, setSingleItem, error, setError} = useContext(ItemContext);
  const [company, setCompany] = useState([]);
  const {itemId} = useParams();
  // console.log("itemId", itemId);
  console.log(company);
  useEffect(()=> {
    axios.get(`/api/shop/items/${itemId}`)
    .then(res => {
      // console.log("inside single item",res);
      setSingleItem(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  useEffect(()=> {
    axios.get(`/api/companies/${singleItem.companyId}`)
    .then(res => {
      console.log("inside single item",res.data.companyInfo);
      setCompany(res.data.companyInfo);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);
  
  return (
    //1st step fetch the data of the item based on the :param (item id)
    //2nd step is to render it.
    <>
      {singleItem && company ? (
        <MainWrapper>
      <LeftDiv>
        <ItemImage src={singleItem.imageSrc}/>
        <ItemPrice>{singleItem.price}</ItemPrice>
      </LeftDiv>
      <RightDiv>
        <ItemName>{singleItem.name}</ItemName>
        <ItemCategory>{singleItem.category}</ItemCategory>
        <ItemLocation>{singleItem.body_location}</ItemLocation>
        <ItemCompanyName>Made by {company.name} in {company.country}</ItemCompanyName>
      </RightDiv>
    </MainWrapper> 
      ) : (
        <div>Loading...</div>
      )}
    </>
    
  );
};

const MainWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
`

const LeftDiv = styled.div`
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 5px;
`

const ItemImage = styled.img`
  object-fit: contain;
`
const ItemPrice = styled.h4``

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`

const ItemName = styled.h2`
font-family: var(--secondary-font-family);
`
const ItemLocation = styled.p``
const ItemCategory = styled.p``
const ItemCompanyName = styled.p``


export default ItemPage;
