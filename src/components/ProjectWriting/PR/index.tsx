import { useState } from 'react';
import {
  IPRRecordsList,
  IPRRecords,
} from '@/api/pr-records/type';
import * as Common from '../Common/style';
import PRCard from '../../PRCard';
import * as _ from './style';
import Modal from './Modal';

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
