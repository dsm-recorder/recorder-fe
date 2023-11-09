import { IRepoResponse } from '@/api/projects/type';
import { RadioInput } from '@/components/Input';
import { VStack } from '@/components/Stack';
import * as _ from './style';

interface disabledType extends IRepoResponse {
  radioId: string;
  isRadioSelected: boolean;
  onClick: () => void;
}

export const RepositoryCard = ({
  name,
  description,
  radioId,
  isRadioSelected,
  onClick,
  language,
}: disabledType) => {
  return (
    <_.RepositoryCard>
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
