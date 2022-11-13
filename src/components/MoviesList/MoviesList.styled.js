import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  margin: ${({ theme }) => theme.space[0]};
  padding: ${({ theme }) => theme.space[0]};

  list-style: none;
`;
