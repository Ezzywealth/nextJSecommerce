import Head from "next/head";
import React from "react";
import Navbar from "./navbar";
import Products from "./Products";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title : "ezzy commerce"}</title>
        <meta name='description' content='Zicomm' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen justify-between flex-col'>
        <header>
          <Navbar />
        </header>
        <main className='container m-auto mt-4 px-4 '>
          <Products>{children}</Products>
        </main>
        <footer className='flex justify-center items-center h-10 shadow-inner'>
          Copyright &copy; 2022 Zicomm
        </footer>
      </div>
      ;
    </>
  );
};

export default Layout;
