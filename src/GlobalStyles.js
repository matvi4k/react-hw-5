import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: center;

  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    
  }

  /* Загальні стилі для списків та карток з вашого проекту */
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 35px;
  }

  img{
    width: 400px;
    height: 400px;
    border-radius: 40px;
  }
  .settings{
  height: 50px;
  background-color: grey;
  border-radius: 30px;
  display: flex;
  justify-content: center; 
  align-items: center; 
  gap: 16px;
  }

  .difficulty{
    width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    background-color: gray;
    height: 100px;
    border-radius: 30px;
  }
  .difficultyP{
    margin-right: 190px;
    padding-top: 10px;
    font-weight: 700;
    font-size: 20px;
  }
  .difficultyLevel{
    margin-top: 25px;
  }

  .badge {
    padding: 7px 15px;
    border-radius: 20px;
    background-color: #e0e0e0;
    margin-left: 10px;

    
    &.active {
      background-color: #ff5252;
      color: #fff;
    }
  }
`;
