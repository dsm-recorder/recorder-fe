import { IPRRecordsType, PRType } from '@/api/pr-records/type';
import { HStack, VStack } from '@/components/Stack';
import * as _ from './style';
import { ReactNode } from 'react';

interface PRCardPropsType extends IPRRecordsType {
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
}: PRCardPropsType) => {
  let typeName = '';

  switch (type) {
    case PRType.NEW_FEATURE:
      typeName = '기능 추가';
      break;
    case PRType.BUG_FIX:
      typeName = '버그 수정';
      break;
    case PRType.REFACTORING:
      typeName = '리펙토링';
      break;
  }

  return (
    <_.PRCardWrapper onClick={onClick}>
      <HStack style={{ height: '100%' }} justify='space-between'>
        <VStack style={{ height: '100%' }} justify='space-between'>
          <_.PRTitle>{title}</_.PRTitle>
          <_.ProgressWrapper>
            <_.ProgressTitle>중요도</_.ProgressTitle>
            <_.ProgressValueWrapper>
              <_.PRProgressBar>
                <_.PRImport barvalue={importance} />
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
            <_.PRType>{typeName}</_.PRType>
            <_.PRDate>{date}</_.PRDate>
          </VStack>
          {children}
        </HStack>
      </HStack>
    </_.PRCardWrapper>
  );
};

export default PRCard;
