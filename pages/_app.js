import React, {useState, useEffect} from 'react';
import App from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.scss'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}