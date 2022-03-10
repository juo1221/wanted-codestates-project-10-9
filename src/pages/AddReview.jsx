import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const AddReview = () => {
  return (
    <>
      <Container>
        <Button title="리뷰 등록하기" />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1.25rem;
`;

export default AddReview;
