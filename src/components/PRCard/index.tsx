import { IPRRecords } from '@/api/pr-records/type';
import { HStack, VStack } from '@/components/Stack';
import * as _ from './style';
import { ReactNode } from 'react';
import { PRConstant } from '@/constant/PR';

interface IPRCardProps extends IPRRecords {
  onClick?: () => void;
  children?: ReactNode;
}

const PRCard = ({
  title,
  importance,
  type,
  date,
  onClick,
  children,
}: IPRCardProps) => {
  return (
    <_.PRCardWrapper onClick={onClick}>
      <HStack style={{ height: '100%' }} justify='space-between'>
        <VStack style={{ height: '100%' }} justify='space-between'>
          <_.PRTitle>{title}</_.PRTitle>
          <_.ProgressWrapper>
            <_.ProgressTitle>중요도</_.ProgressTitle>
            <_.ProgressValueWrapper>
              <_.PRProgressBar>
                <_.PRImport percent={importance} />
              </_.PRProgressBar>
              <_.ProgressTitle>{importance}</_.ProgressTitle>
            </_.ProgressValueWrapper>
          </_.ProgressWrapper>
        </VStack>
        <HStack
          style={{ height: '100%' }}
          justify='space-between'
          gap={60}
          align='center'
        >
          <VStack
            style={{ height: '100%' }}
            justify='space-between'
            align='end'
          >
            <_.PRType>{PRConstant[type].typeName}</_.PRType>
            <_.PRDate>{date}</_.PRDate>
          </VStack>
          {children}
        </HStack>
      </HStack>
    </_.PRCardWrapper>
  );
};

export default PRCard;
