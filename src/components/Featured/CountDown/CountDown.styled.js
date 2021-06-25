import styled from 'styled-components';

export const CountDownWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  color: #ffffff;
`;
export const CountDownTop = styled.div`
  background: #ff4800;
  font-size: 19px;
  padding: 10px;
  display: inline-block;
  text-transform: uppercase;
`;

export const CountDownBottom = styled.div`
  display: flex;
  background: #d93d00;
  padding: 10px 20px;
`;

export const CountDownTime = styled.div`
  font-size: 70px;
  border-right: 1px solid #f44336;
  margin-right: 14px;
  padding-right: 49px;
`;

export const CountDownItem = styled.div`
  &:last-child {
    border: none;
  }
`;

export const CountDownTag = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  padding-left: 7px;
`;
