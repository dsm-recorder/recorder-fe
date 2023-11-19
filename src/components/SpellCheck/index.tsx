import React, { useState, Fragment } from 'react';
import * as _ from './style';
import { ErrorInfo } from '@/components/Input';
import { Button } from '@/components/Button';

interface ErrorSegmentProps {
  text: string;
  error?: ErrorInfo;
  onClick: () => void;
}

export const ErrorDisplay = ({
  isClick,
  segments,
  handleSuggestionClick,
}: {
  isClick: boolean;
  segments: any[];
  handleSuggestionClick: (index: number) => void;
}) => (
  <_.ErrorWrapper style={{ display: isClick ? 'flex' : 'none' }}>
    {segments.map((segment, index) => (
      <div key={index}>
        {segment.error ? (
          <Fragment>
            <ErrorSegment
              text={segment.text}
              error={segment.error}
              onClick={() => handleSuggestionClick(index)}
            />
          </Fragment>
        ) : (
          <div>{segment.text}</div>
        )}
      </div>
    ))}
  </_.ErrorWrapper>
);


export const ErrorSegment = ({ text, error, onClick }: ErrorSegmentProps) => {
  const [hover, setHover] = useState(false);

  return (
    <Fragment>
      <HoverableText text={text} hover={hover} setHover={setHover} />
      {hover && <HoverInfo error={error} onClick={onClick} />}
    </Fragment>
  );
};

const HoverableText = ({
  hover,
  text,
  setHover,
}: {
  hover: boolean;
  text: string;
  setHover: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div onClick={() => setHover(!hover)} style={{ backgroundColor: 'yellow' }}>
    {text}
  </div>
);

const HoverInfo = ({
  error,
  onClick,
}: {
  error?: ErrorInfo;
  onClick: () => void;
}) => (
  <_.HoverWrapper>
    {error?.help}
    <Button onClick={onClick}>교체 : {error?.candWord}</Button>
  </_.HoverWrapper>
);
