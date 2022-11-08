import { ErrorOutline } from '@mui/icons-material';
import { styled } from '@mui/material';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled('div')<{ width?: number }>`
  ${(props) => props.width !== null && `width: ${props.width}px`};
`;

export const TextContainer = styled('div')`
  text-align: center;
  margin-left: 5px;
`;

export const StyledErrorOutline = styled(ErrorOutline)`
  ${(props) => `color: ${props.theme.yellow}`};
`;
