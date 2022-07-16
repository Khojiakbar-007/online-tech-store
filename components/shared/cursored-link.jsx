import Link from 'next/link';
import React from 'react';

const CursoredLink = ({ href = '', children }) => (
  <div style={{ cursor: 'pointer' }}>
    <Link href={href}>{children}</Link>
  </div>
);

export default CursoredLink;


//***** G'IRT MUSOR *****//
// class CursoredLink extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       href: props.href,
//       children: props.children,
//     };
//   }

//   render() {
//     return (
//       <div style={{ cursor: 'pointer' }}>
//         <Link href={this.state.href}>{this.state.children}</Link>
//       </div>
//     );
//   }
// }
