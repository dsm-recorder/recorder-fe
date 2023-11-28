import React, { useState, Fragment, useEffect } from 'react';
import * as _ from './style';
import { ErrorInfo } from '@/components/Input';
import { Button } from '@/components/Button';
import { GetspellCheck } from '@/api/spells';

interface ErrorSegmentProps {
  text: string;
  error?: ErrorInfo;
  onClick: () => void;
}

export const ErrorDisplay = ({
  value,
  setValue,
  isClick,
}: {
  value: string;
  setValue: (e: string) => void;
  isClick: boolean;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { mutate: GetSpellMutataion, data: rightSpell } = GetspellCheck();
  const [segments, setSegments] = useState<
    { text: string; error?: ErrorInfo }[]
  >([]);

  useEffect(() => {
    if (rightSpell && rightSpell.errorInfo) {
      const errorInfo = rightSpell.errorInfo;
      let lastIndex = 0;
      const newSegments: { text: string; error?: ErrorInfo }[] = [];

      errorInfo.forEach((error) => {
        const { start, end, orgStr, candWord } = error;
        if (start > lastIndex) {
          newSegments.push({ text: value.slice(lastIndex, start) });
        }
        newSegments.push({
          text: value.slice(start, end),
          error: { help: error.help, orgStr, candWord },
        });
        lastIndex = end;
      });

      if (lastIndex < value.length) {
        newSegments.push({ text: value.slice(lastIndex) });
      }

      setSegments(newSegments);
    }
  }, [value, rightSpell]);

  useEffect(() => {
    if (!isClick) {
      const updatedSegments = segments.map((segment) =>
        segment.error ? { text: segment.text } : { text: segment.text }
      );

      const updatedValue = updatedSegments
        .map((segment) => segment.text)
        .join('');

      setValue(updatedValue);
    } else {
      GetSpellMutataion(value);
    }
  }, [isClick]);

  const handleSuggestionClick = (index: number) => {
    const updatedSegments = segments.map((segment, i) => {
      if (i === index && segment.error) {
        return { text: segment.error.candWord };
      } else {
        return { text: segment.text, error: segment.error };
      }
    });
    setSegments(updatedSegments);
  };

  return (
    <_.ErrorWrapper style={{ display: isClick ? 'block' : 'none' }}>
      {segments.map((segment, index) => (
        <Fragment key={index}>
          {segment.error ? (
              <ErrorSegment
                text={segment.text}
                error={segment.error}
                onClick={() => handleSuggestionClick(index)}
              />
          ) : (
              <Fragment>{segment.text}</Fragment>
          )}
        </Fragment>
      ))}
    </_.ErrorWrapper>
  );
};

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
  <_.ErrorText onClick={() => setHover(!hover)} style={{ backgroundColor: 'yellow' }}>
    {text}
  </_.ErrorText>
);

const HoverInfo = ({
  error,
  onClick,
}: {
  error?: ErrorInfo;
  onClick: () => void;
}) => (
  <_.HoverWrapper>
    {error?.help && <div dangerouslySetInnerHTML={{ __html: error.help }} />}
    <hr style={{ width: '100%' }} />
    <Button onClick={onClick}>교체 : {error?.candWord}</Button>
  </_.HoverWrapper>
);
