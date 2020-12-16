import '../styles/globals.css'
import {wrapper} from '../src/store/store';
import React, {FC} from 'react';
import {AppProps} from 'next/app';


const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
