import { IRepoResponse } from '../../api/project/type';
import { RadioInput } from '../Input';
import { VStack } from '../Stack';
import * as _ from './style';

interface disabledType extends IRepoResponse {
  index: number;
  radioId: string;
  isRadioSelected: boolean;
  onClick: () => void;
}

export const RepositoryCard = ({
  index,
  name,
  description,
  radioId,
  isRadioSelected,
  onClick,
  language,
}: disabledType) => {
  return (
    <_.RepositoryCard key={index}>
      <VStack>
        <_.Name>{name.split('/')[1]}</_.Name>
        <_.Description>{description}</_.Description>
        <_.Language>{language}</_.Language>
      </VStack>
      <RadioInput
        radioId={radioId}
        isRadioSelected={isRadioSelected}
        onClick={onClick}
      />
    </_.RepositoryCard>
  );
};
