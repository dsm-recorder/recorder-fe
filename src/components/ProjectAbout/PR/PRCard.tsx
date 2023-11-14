import { IPRRecordsType, PRType } from '@/api/pr-records/type';
import { HStack, VStack } from '@/components/Stack';
import * as _ from './PRCard.style';

interface PRCardPropsType extends IPRRecordsType {
  onClick?: () => void;
}

const PRCard = ({
  title,
  importance,
  type,
  date,
  onClick,
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
        <VStack style={{ height: '100%' }} justify='space-between' align='end'>
          <_.PRType>{typeName}</_.PRType>
          <_.PRDate>{date}</_.PRDate>
        </VStack>
      </HStack>
    </_.PRCardWrapper>
  );
};

export default PRCard;
