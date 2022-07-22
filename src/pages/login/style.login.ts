import styled from "styled-components"

export const LoginStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 0 2rem;

    img{
        height: 200px;
    }

    h1{
        font-weight: bold;
        font-size: xx-large;
    }
  
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 480px;
        color: #2D2D2D;

        .field{
            padding-bottom: 0.7rem;
        }
    
        .field label{
            display: block;
            letter-spacing: 0.02em;
            color: #000000;
        }
    
        .field input[type=email], input[type=password]{
           width: 300px;
            padding: 0.5rem;
            border: 1px solid #515151;
        }
    
        .btnCentralizar{
            width: 320px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            border-bottom: 2px solid #515151;
            
            .actions button{
                text-align: center;
                padding: 10px 32px;
                color: #FFFFFF;
                border: none;
                background: #000;
                cursor: pointer;
            }
        }
    
        .btnCentralizar--register{
            width: 320px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 30px;

            h5{
                margin-bottom: 30px;
            }

            .actions--register .link{
                padding: 15px 50px;
                border: 1px solid #6495ED;
                span{
                    color: #6495ED;
                    font-weight: bold;
                }
            }
        }
    }
    
`;