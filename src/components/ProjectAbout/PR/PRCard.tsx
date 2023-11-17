import { IPRRequestType, PRType } from '@/api/pr-records/type';
import * as _ from './PRCard.style';
import { VStack } from '@/components/Stack';

const PRCard = ({
  title,
  type,
  content,
  solution,
  attachmentUrls,
}: IPRRequestType) => {
  let labelName = '';

  switch (type) {
    case PRType.NEW_FEATURE:
      labelName = '기능설명';
      break;
    case PRType.BUG_FIX:
      labelName = '문제사항';
      break;
    case PRType.REFACTORING:
      labelName = '개선부분';
      break;
  }

  return (
    <_.PRCardWrapper>
      <_.PRTitle>{title}</_.PRTitle>
      <VStack gap={10}>
        <_.SubTitle>{labelName}</_.SubTitle>
        <_.Content>{content}</_.Content>
      </VStack>
      {type == PRType.BUG_FIX && solution && (
        <VStack gap={10}>
          <_.SubTitle>해결방법</_.SubTitle>
          <_.Content>{solution}</_.Content>
        </VStack>
      )}

      {attachmentUrls[0] && (
        <_.ImgWrapper>
          {attachmentUrls.map((e) => (
            <_.Img src={e} />
          ))}
        </_.ImgWrapper>
      )}
    </_.PRCardWrapper>
  );
};

export default PRCard;
