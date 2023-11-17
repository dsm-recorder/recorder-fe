import {  IPRRequestListType } from '@/api/pr-records/type';
import * as Common from '../Common/style';
import * as _ from './style';
import PRCard from './PRCard';

const PRList = ({ prRecords }: IPRRequestListType) => {
  return (
    <Common.ContentWrapper>
      <Common.Label>PR 기록</Common.Label>
      <_.PRBoxWrapper>
        {prRecords.map((pr) => {
          return (
            <PRCard {...pr} />
          )
        })}
      </_.PRBoxWrapper>
    </Common.ContentWrapper>
  );
};

export default PRList;
