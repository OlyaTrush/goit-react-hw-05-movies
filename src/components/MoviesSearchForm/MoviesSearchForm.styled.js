import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;

  margin-bottom: ${({ theme }) => theme.space[4]};
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  width: 100px;
`;

export const SearchField = styled.input`
width:320px;
height:25px;
display: inline-block;
  
    font-size: 20px;
   
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
}
`;
