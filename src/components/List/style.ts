import styled from "styled-components";

export const BodyContainer = styled.div`
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 800px;
    padding: 10px 20px;
`;
export const InputsArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;

        input {
            width: 100%;
            max-width: 300px;
        }
`;
export const ListArea = styled.div`
    display: flex;
    gap: 20px;
   
        .itemId,
        .itemName,
        .itemJob,
        .deleteButton{
            width: 100px;
            text-align: left;
        }

        @media(max-width: 520px){
            .itemId,
            .itemName,
            .itemJob,
            .deleteButton{
                width: 100%;
                text-align: left;
            }
        }

`;
