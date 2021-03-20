import React from 'react';
import styled from '@emotion/styled';
const StyledNavBar = styled.div `
  color: pink;
`;
export function NavBar(props) {
    return (React.createElement(StyledNavBar, null,
        React.createElement("h1", null, "Welcome to NavBar!")));
}
export default NavBar;
//# sourceMappingURL=NavBar.js.map