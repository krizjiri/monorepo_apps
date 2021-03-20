import React from 'react';
import styled from '@emotion/styled';
const StyledShared = styled.div `
  color: pink;
`;
export function Shared(props) {
    return (React.createElement(StyledShared, null,
        React.createElement("h1", null, "Welcome to shared!")));
}
export default Shared;
//# sourceMappingURL=shared.js.map