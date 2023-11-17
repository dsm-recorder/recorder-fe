import { useEffect, useState } from 'react';
import { Arrow } from '@/asset/icon/ArrowIcon';
import ReactOutSideClickHandler from 'react-outside-click-handler';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

interface DropDownElementType {
  width?: string;
  optionFullHeight?: string;
  dropDownHeight?: string;
  optionheight?: string;
  top?: string;
  margin?: string;
  label?: string;
}

interface DropDownPropsType<T> extends DropDownElementType {
  list?: T[];
  objectKey?: string;
  value: T;
  onClick: (value: T) => void;
  placeholder?: string;
}

export const DropDown = <T extends string | number | object>({
  ...props
}: DropDownPropsType<T>) => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [value, setValue] = useState<T>(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <ReactOutSideClickHandler
      display='inline-block'
      onOutsideClick={(_e) => {
        setDropDown(false);
      }}
    >
      {props.label && <InputLabelBox>{props.label}</InputLabelBox>}
      <DropDownInner width={props.width} onClick={(e) => e.preventDefault()}>
        <DropDownWrapper
          dropDownHeight={props.dropDownHeight}
          onClick={() => setDropDown(!dropDown)}
        >
          <PlaceHolderValueInner style={{ color: value ? 'black' : '#999999' }}>
            {value
              ? typeof value === 'object' && props.objectKey
                ? (value[props.objectKey as keyof typeof value] as string)
                : String(value)
              : props.placeholder}
          </PlaceHolderValueInner>
          <Arrow direction={dropDown ? 'top' : 'bottom'} size='small'/>
        </DropDownWrapper>
        {dropDown && props.list && (
          <OptionWrapper
            optionFullHeight={props.optionFullHeight}
            top={props.top}
          >
            {props?.list?.map((e, index) => {
              return (
                <Option
                  onClick={() => {
                    props.onClick(e);
                    setDropDown(!dropDown);
                  }}
                  key={index}
                >
                  {typeof e === 'object' && props?.objectKey
                    ? (e[props?.objectKey as keyof T] as React.ReactNode)
                    : String(e)}
                </Option>
              );
            })}
          </OptionWrapper>
        )}
      </DropDownInner>
    </ReactOutSideClickHandler>
  );
};

const DropDownInner = styled.div<{ width?: string }>`
  width: ${({ width }) => width ?? '300px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

const DropDownWrapper = styled.div<{ dropDownHeight?: string }>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.gray[10]};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[50]};
  padding: 15px;
  width: 100%;
  height: ${({ dropDownHeight }) => dropDownHeight ?? '40px'};
`;

const slideDown = keyframes<{ optionFullHeight?: string }>`
    from {
      min-height: 0;
    }
    to {
      min-height: ${({ optionFullHeight }) => optionFullHeight ?? '120px'};
    }
  `;

const OptionWrapper = styled.div<{ optionFullHeight?: string; top?: string }>`
  cursor: pointer;
  width: 100%;
  min-height: ${({ optionFullHeight }) => optionFullHeight ?? '120px'};
  overflow-y: auto;
  display: flex;
  top: ${({ top }) => top ?? '60px'};
  z-index: 1;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[50]};
  flex-direction: column;
  align-items: center;
  gap: 1px;
  position: absolute;
  background: ${({ theme }) => theme.colors.gray[10]};
  animation: ${slideDown} 0.05s ease-in-out;
`;

const PlaceHolderValueInner = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Option = styled.div<{ optionHeight?: string }>`
  width: 100%;
  height: ${({ optionHeight }) => optionHeight ?? '40px'};
  padding: 15px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${({ theme }) => theme.colors.gray[100]};
  background: ${({ theme }) => theme.colors.gray[10]};
`;

const InputLabelBox = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray[100]};
  font-weight: 400;
  margin-bottom: 15px;
`;
