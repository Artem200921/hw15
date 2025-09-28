import styled from "styled-components";

export const GifListStyles = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  li {
    display: flex;
    flex-direction: column;
    background-color: grey;
    align-items: center;
    justify-content: flex-start;
    width: 350px;
    min-height: content-fit;
    max-height: 400px;
    padding-bottom: 10px;
    img {
      width: 250px;
    }
  }
`;
