import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: 'Gibson-Regular';
    src: url('//cdn.pro.com/fonts/gibson/29F913_4_regular.eot');
    src: url('//cdn.pro.com/fonts/gibson/29F913_4_regular.eot?#iefix') format('embedded-opentype'), url('//cdn.pro.com/fonts/gibson/29F913_4_regular.woff') format('woff'), url('//cdn.pro.com/fonts/gibson/29F913_4_regular.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Gibson-SemiBold';
    src: url('//cdn.pro.com/fonts/gibson/29F913_5_semibold.eot');
    src: url('//cdn.pro.com/fonts/gibson/29F913_5_semibold.eot?#iefix') format('embedded-opentype'), url('//cdn.pro.com/fonts/gibson/29F913_5_semibold.woff') format('woff'), url('//cdn.pro.com/fonts/gibson/29F913_5_semibold.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Gibson-Light';
    src: url('//cdn.pro.com/fonts/gibson/29F913_7_light.eot');
    src: url('//cdn.pro.com/fonts/gibson/29F913_7_light.eot?#iefix') format('embedded-opentype'), url('//cdn.pro.com/fonts/gibson/29F913_7_light.woff') format('woff'), url('//cdn.pro.com/fonts/gibson/29F913_7_light.ttf') format('truetype');
  }
  
  body {
    font-family: Gibson-Regular, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
`

export const AppHeader = styled.div`
  background-color: #1E5992;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoImg = styled.img`
  width: 48px;
  margin: 0px 15px;
`

export const HeaderText = styled.div`
  font-size: 24px;
`
