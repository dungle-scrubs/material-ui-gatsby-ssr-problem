import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout = (props) => {
  return (
    <>
      <CssBaseline />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
