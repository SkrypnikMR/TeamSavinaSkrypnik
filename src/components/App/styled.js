import styled from 'styled-components';

export const StAppDiv = styled.div`
  min-height: 100vh;
  ${({ url = 'heh' }) => url && `background: url(${url}) 100% 100% no-repeat`};
  background-size: cover;
  direction: ${({ lang }) => (lang === 'ar' ? 'rtl' : 'ltr')};
`;
