import styled from '@emotion/styled';
import { Typography } from '@zignaly-open/ui';

export const Gap = styled.div<{ gap: number }>`
  ${(props) => `
  padding: ${props.gap}px;`}
`;

export const Subtitle = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 350px;
`;

export const ButtonContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
