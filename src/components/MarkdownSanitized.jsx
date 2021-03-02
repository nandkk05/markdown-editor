import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 50%;
    height: 100%;
    padding: 13%;
    border-right: 1.5px solid rgba(15, 15, 15, 0.4);
    font-family: 'Lato', sans-serif;
`

const Title = styled.div`
    width: 50%;
    height: 100%;
    padding: 13%;
    border-right: 1.5px solid rgba(15, 15, 15, 0.4);
    font-family: 'Lato', sans-serif;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    font-size: 17px;
`

export function MarkdownSanitized(props){

    return <Container>
        <Title>Markdown Text</Title>
        <TextArea/>
    </Container>
}

export default MarkdownSanitized