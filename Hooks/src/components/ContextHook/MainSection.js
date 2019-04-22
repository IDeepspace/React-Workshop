import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

// class MainSection extends React.Component {
//   shouldComponentUpdate() {
//     return false;
//   }

//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {theme => (
//           <div
//             style={{
//               backgroundColor: theme.background,
//               color: theme.foreground,
//               minHeight: '200px',
//             }}
//           >
//             <h3>Hello World</h3>
//           </div>
//         )}
//       </ThemeContext.Consumer>
//     );
//   }
// }

function MainSection() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        minHeight: '200px',
      }}
    >
      <h3>Hello World</h3>
    </div>
  );
}

export default MainSection;
