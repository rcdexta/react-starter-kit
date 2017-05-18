import styled from 'styled-components'

export const LoginPanel = styled.div`
  align-items: center; 
  flex: 0 1 auto;
  margin: 50px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(255, 255, 255);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 0px;
`

export const SubmitProgressDiv = styled.div`
  margin-top: 10px;
  text-align: center;
`

export const SubmitButton = styled.input`
  margin-top: 10px;
`

export const TextField = styled.input`
  width: 15rem;
`

export const ErrorBlock = styled.div`
  margin: 5px 0px;
  color: red;
`