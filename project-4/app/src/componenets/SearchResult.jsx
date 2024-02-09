import React from "react";
import styled from "styled-components";

const SearchResult = ({ data }) => {
  return (
    <div>
      <FoodCardContainer>
        <FoodCards>
          {data?.map((food) => (
            <FoodCard key={food.name}>{food.text}</FoodCard>
          ))}
        </FoodCards>
      </FoodCardContainer>
    </div>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div``;
const FoodCard = styled.div``;
