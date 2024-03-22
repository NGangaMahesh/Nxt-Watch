import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.themeLight ? '#f9f9f9 ' : '#0f0f0f')};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const SubLoginContainer = styled.div`
  width: 30%;
  height: 55vh;
  background-color: ${props => (props.themeLight ? '#f9f9f9 ' : '#000000')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
`

export const LogoImg = styled.img`
  width: 40%;
  height: 50px;
  margin-top: 20px;
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-inline: 20px;
`

export const LabelText = styled.label`
  color: ${props => (props.themeLight ? '#7e858e' : '#ffffff')};
  font-weight: bold;
  font-size: 12px;
  margin-top: 24px;
`

export const UserInput = styled.input`
  color: ${props => (props.themeLight ? '#000000' : '#ffffff')};
  outline: none;
  width: 100%;
  height: 35px;
  padding-left: 5px;
  padding: 5px;
  background-color: transparent;
  border: 2px solid #e2e8f0;
  margin-top: 5px;
  border-radius: 4px;
`

export const CheckBoxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const CheckBox = styled.input`
  color: ${props => (props.themeLight ? '#000000' : '#ffffff')};
`

export const CheckText = styled.label`
  color: ${props => (props.themeLight ? '#000000' : '#ffffff')};
  font-size: 12px;
`

export const SubmitBtn = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  background-color: #3b82f6;
  font-weight: bold;
  width: 100%;
  margin-top: 25px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
`
