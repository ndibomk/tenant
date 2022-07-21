import styled from "styled-components";

export const StyledForm = styled.form`
  /* max-width: 680px; */
  width: 100%;
  display: flex;
  flex-direction:column;
  /* margin: 2rem ; */
  align-items: center;
  
  justify-content: center;
  h2 {
    margin-bottom: 1rem;
  }
  button,
  input {
    height: 35px;
    width: 15rem;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    margin-bottom: 1rem;
    &:focus {
      border: 1px solid rgb(0, 208, 255);
    }
  }
  button {
    cursor: pointer;
    &:focus {
      border: none;
    }
  }
  p {
    font-size: 14px;
    color: red;
  }
  
  @media screen and (max-width: 600px) {
    max-width: 390px;
    width: 90%;
    margin-right: 1rem;
    margin-left:1rem;
  }
`;
export const StyledForms = styled.form`
  max-width: 640px;
  width: 100%;
  margin: 2rem ;
  h2 {
    margin-bottom: 1rem;
  }
  button,
  input {
    height: 35px;
    width: 100%;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    margin-bottom: 1rem;
    &:focus {
      border: 1px solid rgb(0, 208, 255);
    }
  }
  button {
    cursor: pointer;
    &:focus {
      border: none;
    }
  }
  p {
    font-size: 14px;
    color: red;
  }
  
  @media screen and (max-width: 600px) {
    max-width: 390px;
    width: 90%;
    margin-right: 1rem;
  }
`;