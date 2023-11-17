import { IPRRequest } from '@/api/pr-records/type';
import * as _ from './IssueCard.style';
import { VStack } from '@/components/Stack';
import { PRConstant } from '@/constant/PR';

const IssueCard = ({
  title,
  type,
  content,
  solution,
  attachmentUrls,
}: IPRRequest) => {
  return (
    <_.PRCardWrapper>
      <_.PRTitle>{title}</_.PRTitle>
      <VStack gap={10}>
        <_.SubTitle>{PRConstant[type].label[0]}</_.SubTitle>
        <_.Content>{content}</_.Content>
      </VStack>
      {type == 'BUG_FIX' && solution && (
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

export default IssueCard;
