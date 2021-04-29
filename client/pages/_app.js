import React from 'react';
import PropTypes from 'prop-types';
import HeaderLayout from '../components/HeaderLayout';
import Head from "next/head";
import { createGlobalStyle } from "styled-components";



//페이지들의 공통적인 부분을 처리하는 곳
//appjs는 indexjs의 부모인셈. 즉, index의 return이 들어옴
const App = () => {
    return (
        <div>
            <DefaultLayout />
            <Head>
                <meta charSet="utf-8" />
                <title>폴로딩고</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap" rel="stylesheet" />
            </Head>
            <HeaderLayout />
        </div>
    )
}



const DefaultLayout = createGlobalStyle`

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
  color: $dark-color;

  &:hover {
    color: $secondary-color;
  }
}

ul {
  list-style: none;
}

.btn {
  display: inline-block;
  font-size: 0.8rem;
  padding: 12px;
  color: $white-color;
  background-color: $dark-color;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: none;
  outline: none;

  &:hover {
    background-color: $primary-color;
    color: $light-color;
  }
}

.loading {
  width: 300px;
  text-align: center;
  margin: auto;
}

.error {
  color: $danger-color;
  font-size: 1rem;
}

.success {
  color: $success-color;
  font-size: 1rem;
}

.select {
  width: 40px;
  padding: 5px;
  outline: none;
  border-color: $primary-color;
  cursor: pointer;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

/* List */
.list {
  margin: 0.5rem 0;
}

.list li {
  padding-bottom: 0.3rem;
}

/* Padding */
.p {
  padding: 0.5rem;
}
.p-1 {
  padding: 1rem;
}
.p-2 {
  padding: 2rem;
}
.p-3 {
  padding: 3rem;
}
.py {
  padding: 0.5rem 0;
}
.py-1 {
  padding: 1rem 0;
}
.py-2 {
  padding: 2rem 0;
}
.py-3 {
  padding: 3rem 0;
}
.py-4 {
  padding: 4rem 0;
}
.py-5 {
  padding: 5rem 0;
}

/* Margin */
.m {
  margin: 0.5rem;
}
.m-1 {
  margin: 1rem;
}
.m-2 {
  margin: 2rem;
}
.m-3 {
  margin: 3rem;
}
.my {
  margin: 0.5rem 0;
}
.my-1 {
  margin: 1rem 0;
}
.my-2 {
  margin: 2rem 0;
}
.my-3 {
  margin: 3rem 0;
}`;



App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;