import { IPRRequestList } from '@/api/pr-records/type';
import * as Common from '../Common/style';
import * as _ from './style';
import IssueCard from './IssueCard';

const PRList = ({ prRecords }: IPRRequestList) => {
  return (
    <Common.ContentWrapper>
      <Common.Label>PR 기록</Common.Label>
      <_.PRBoxWrapper>
        {prRecords.map((pr) => (
          <IssueCard key={pr.title} {...pr} />
        ))}
      </_.PRBoxWrapper>
    </Common.ContentWrapper>
  );
};

export default PRList;
