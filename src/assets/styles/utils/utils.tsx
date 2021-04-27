import styled, { css } from 'styled-components';
import StyleTypes from './utils.Types'

export const BodyColor = styled.div<StyleTypes>`
      background-color: ${({ bgColor }) => bgColor ? bgColor : '#fff'};  
`;

export const Container = styled.div<StyleTypes>`
      padding-right: 40px;
      padding-left: 40px;
      margin-right: auto;
      margin-left: auto;
      
      ${({ paddingTop }) => paddingTop && css`
        padding-top: ${paddingTop}px;
      `
      }
       ${({ paddingBottom }) => paddingBottom && css`
        padding-bottom: ${paddingBottom}px;
      `
      }
      
      @media (min-width: 576px) {
            max-width: 576px;
      }
      @media (min-width: 768px) {
            max-width: 768px;
      }
      @media (min-width: 992px) {
            max-width: 992px;
      }
      @media (min-width: 1200px) {
            max-width: 1200px;
      }
      @media (min-width: 1400px) {
            max-width: 1400px;
      }
`;

export const FlexDiv = styled.div<StyleTypes>`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
      ${({ flexDirection }) => flexDirection && css`
        flex-direction: ${flexDirection}
      `
      };
      ${({ flexWrap }) => flexWrap && css`
         flex-wrap: ${flexWrap}
      `
      };
      ${({ padding }) => padding && css`
         padding: ${padding}
      `
      };
`;

export const LayoutColumn = styled.div<StyleTypes>`
      border-radius: 10px;
      padding: ${({ padding }) => padding ? padding : '20px'};
      width: ${({ width }) => width ? width : '100%'};
      background-color: ${({ bgColor }) => bgColor ? bgColor : '0'};
      color: ${({ color }) => color ? color : '#000'};
`;

export const Title = styled.h1<StyleTypes>`
      font-size: ${({ size }) => size === 'big' ? '2.5rem' : '1.6rem'};
      font-weight: 500;
      text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};  
`;

export const SecondaryTitle = styled.h2<StyleTypes>`
      font-size: ${({ size }) => size === 'big' ? '2.5rem' : '1.6rem'};
      font-weight: 500;
      margin: 0;
      padding-bottom: 20px;
`;

export const InputContainer = styled.div<StyleTypes>`
      display: flex;
      flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : 'column'};
      margin-bottom: 20px;
`;

export const Label = styled.label`
      margin-bottom: 5px;
`;

export const Input = styled.input`
      font-size: .9rem;
      padding: 12px 15px;
      color: #495057;
      background-color: #f2f4f6;
      border: 2px solid #f2f4f6;
      border-radius: 3px;
      transition: background-color .15s ease-in-out;
      
      &:focus {
            background-color: #fff;
            box-shadow: none;
            outline: 0;
      }
`;

export const Textarea = styled.textarea.attrs({
      rows: 4
})`
      font-size: .9rem;
      padding: 12px 15px;
      color: #495057;
      background-color: #f2f4f6;
      border: 2px solid #f2f4f6;
      border-radius: 3px;
      transition: background-color .15s ease-in-out;
      resize: none;
      
      &:focus {
            background-color: #fff;
            box-shadow: none;
            outline: 0;
      }
`;

export const Select = styled.select`
      font-size: .9rem;
      padding: 12px 15px;
      color: #495057;
      background-color: #f2f4f6;
      border: 2px solid #f2f4f6;
      border-radius: 3px;
      transition: background-color .15s ease-in-out;
      appearance:none;
      background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
      background-repeat: no-repeat;
      background-position-x: 99%;
      background-position-y: 50%;

      &:focus {
            background-color: #fff;
            box-shadow: none;
            outline: 0;
      }
`;

export const InputError = styled.div`
      color: darkred;
      font-size: .8rem;
      margin-top: 5px;
`;

export const Submit = styled.input.attrs({
      type: 'submit'
})`
      text-align: center;
      white-space: nowrap;
      user-select: none;
      cursor: pointer;
      border: 1px solid transparent;
      padding: .375rem 1rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 3px;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      background-color: #000;
      color: #fff;

      &:hover {
            background: rgba(0,0,0,.75);
            text-decoration: none;
            color: #fff;
      }
`;

export const CloseButton = styled.button`
      background-color: #efefef;
      font-size: 20px;
      color: #999;
      border-radius: 3px;
      border: none;
      width: 30px;
      height: 30px;
`;