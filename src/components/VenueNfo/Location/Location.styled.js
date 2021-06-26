import styled from 'styled-components';

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  position: absolute;
  top: -30px;
  left: 124px;
`;
export const VenueNfoOuter = styled.div`
  width: 300px;
  border: 2px solid #828282;
  margin: auto;
  padding: 5px;
`;

export const VenueNfoInner = styled.div`
  border: 2px solid #828282;
  position: relative;
  padding: 0px 20px;
  transition: all 500ms ease;
  &:hover {
    background: #3e3e3e;
  }
`;

export const Title = styled.div`
  font-size: 28px;
  margin: 90px 0px 20px 0px;
  border-bottom: 1px solid #5d5d5d;
  padding-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 90px;
`;
