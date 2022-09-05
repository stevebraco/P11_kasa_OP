import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
ul {
  list-style: none;
}
button,
input,
select {
  margin: 0;
}
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
img,
video {
  height: auto;
  max-width: 100%;
}
iframe {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
body {
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-size: 38px;
}

h2 {
  font-size: 36px;
  color: #ff6060;
}

a {
  text-decoration: none;
}

img {
  width: 100%;
  height: auto;
  max-width: 100%;
}
button {
  cursor: pointer;
  border: none;
  background: transparent;
}`;

export const WrapperButton = styled.div`
  padding: 30px 20px;
  background-color: #f6f6f6;
  min-height: 170px;
`;
