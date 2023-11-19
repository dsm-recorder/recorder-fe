import { useState } from 'react';
import { IPRRecordsList, IPRRecords } from '@/api/pr-records/type';
import * as Common from '../Common/style';
import PRCard from '../../PRCard';
import * as _ from './style';
import Modal from './Modal';
import { VStack } from '@/components/Stack';
import { NoticeIcon } from '@/asset/icon';

const PRList = ({ prRecords }: IPRRecordsList) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPR, setCurrentPR] = useState<IPRRecords>({
    id: '',
    title: '',
    type: 'NEW_FEATURE',
    importance: 0,
    date: '',
  });

  const handleClick = (pr: IPRRecords) => {
    setCurrentPR(pr);
    setIsOpen(true);
  };

  return (
    <Common.ContentWrapper>
      <Common.Label>PR 기록</Common.Label>
      <_.PRBoxWrapper>
        {prRecords.length !== 0 ? (
          prRecords.map((pr) => (
            <PRCard key={pr.id} onClick={() => handleClick(pr)} {...pr} />
          ))
        ) : (
          <VStack style={{ width: '100%' }} align='center' gap={30}>
            <NoticeIcon size={100} />
            <_.NoticeTitle>기록중인 PR이 없습니다</_.NoticeTitle>
            <_.NoticeSub>
              크롬 확장프로그램을 이용하여 PR을 기록해보세요!
            </_.NoticeSub>
          </VStack>
        )}
        {isOpen && <Modal pr={currentPR} onClose={() => setIsOpen(false)} />}
      </_.PRBoxWrapper>
    </Common.ContentWrapper>
  );
};

export default PRList;
