import SimpleBar from 'simplebar-react';

import Footer from './footer';
import Header from './header';

function Layout({ children }) {
  return (
    <SimpleBar className="app-scrollbar">
      <Header />
      {children}
      <Footer />
    </SimpleBar>
  );
}

export default Layout;
