import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import HeaderLayout from '../layout/HeaderLayout';
import Footer from '../components/Footer';
import wrapper from '../store/configureStore';

// 페이지들의 공통적인 부분을 처리하는 곳
// appjs는 indexjs의 부모인셈. 즉, index의 return이 들어옴
const App = ({ Component }) => {
  console.log('app.js');
  return (
    <ThemeProvider
      theme={{
        palette: {
          $darkcolor: '#000',
          $whitecolor: '#fff',
          $lightcolor: '#f4f4f4',
          $primarycolor: '#b2b2b2',
          $secondarycolor: '#666',
          $hovercolor: '#555',
          $emphasiscolor: '#f3885f',
          $successcolor: '#3ba961',
          $dangercolor: '#d23430',
          $warningcolor: '#f0ae4d',
          $infocolor: '#219bcf',
        },
      }}
    >
      <DefaultLayout
        $darkcolor="#000"
        $whitecolor="#fff"
        $lightcolor="#f4f4f4"
        $primarycolor="#b2b2b2"
        $secondarycolor="#666"
        $hovercolor="#555"
        $emphasiscolor="#f3885f"
        $successcolor="#3ba961"
        $dangercolor="#d23430"
        $warningcolor="#f0ae4d"
        $infocolor="#219bcf"
      />
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c53e694391d9385c9f70c1330e6ab07b"
        />
        <script src="https://developers.kakao.com/sdk/js/kakao.js" />
        <title>폴로딩고</title>
      </Head>
      <div className="wrapper">
        <HeaderLayout />
        <main>
          <Component />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
};

const DefaultLayout = createGlobalStyle`
.wrapper{
  min-height:100vh;
  position:relative;
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Jost', sans-serif;
}

body {

  font-family: 'Nunito', sans-serif;
  font-size: 0.8rem;
  line-height: 1.6;
  background-color: #fff;
}

a {
  text-decoration: none;
  color: ${(props) => props.$darkcolor};

  &:hover {
    color:  ${(props) => props.$secondarycolor};
  }
}

ul {
  list-style: none;
}

li::marker{
  content:'';
}

.btn {
  cursor :pointer;
  display: inline-block;
  font-size: 0.8rem;
  padding: 12px;
  color: ${(props) => props.$whitecolor};
  background-color: ${(props) => props.$darkcolor};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: none;
  outline: none;

  &:hover {
    background-color: ${(props) => props.$primarycolor};
    color: ${(props) => props.$lightcolor};
  }
}

.loading {
  width: 300px;
  text-align: center;
  margin: auto;
}

.select {
  width: 40px;
  padding: 5px;
  outline: none;
  border-color: ${(props) => props.$primarycolor};
  cursor: pointer;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}
`;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// Provider로 알아서 감싸줌 (nextjs6버전 부터)
export default wrapper.withRedux(App);
