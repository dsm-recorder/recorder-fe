import { useState } from 'react';
import {
  IPRRecordsListType,
  IPRRecordsType,
  PRType,
} from '@/api/pr-records/type';
import * as Common from '../Common/style';
import PRCard from '../../PRCard';
import * as _ from './style';
import Modal from './Modal';

const PRList = ({ prRecords }: IPRRecordsListType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPR, setCurrentPR] = useState<IPRRecordsType>({
    id: '',
    title: '',
    type: PRType.NEW_FEATURE,
    importance: 0,
    date: '',
  });

  const handleClick = (pr: IPRRecordsType) => {
    setCurrentPR(pr);
    setIsOpen(true);
  };

  return (
    <Common.ContentWrapper>
      <Common.Label>PR 기록</Common.Label>
      <_.PRBoxWrapper>
        {prRecords &&
          prRecords.map((pr, index) => (
            <PRCard key={index} onClick={() => handleClick(pr)} {...pr} />
          ))}
        {isOpen && <Modal pr={currentPR} onClose={() => setIsOpen(false)} />}
      </_.PRBoxWrapper>
    </Common.ContentWrapper>
  );
};

export default PRList;
