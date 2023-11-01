import * as _ from './style';
import * as Common from '../Common/style';
import { HStack } from '../../Stack';
import { useInput } from '../../../hook/useInput';
import { DeleteUser } from '../../../api/users';

interface IWithdrawProps {
  accountId: string;
}

const Withdraw = ({ accountId }: IWithdrawProps) => {
  const { form, onChange } = useInput({ accoundId: '' });
  const { mutate: deleteUser } = DeleteUser();
  return (
    <Common.ContentWrapper>
      <Common.ContentTitle>회원탈퇴</Common.ContentTitle>
      <_._NoticeMessageWrapper>
        이 작업은 취소할 수 없습니다.
        <br />
        이렇게 하면 모든 프로젝트와 개인정보를 포함하여 영구적으로 삭제됩니다.
        <br />
        확인하려면 아이디를 입력하세요.
      </_._NoticeMessageWrapper>
      <HStack gap={30}>
        <_._IdInput
          placeholder={accountId}
          name='accoundId'
          value={form.accoundId}
          onChange={onChange}
        />
        <Common.Button
          bgcolor='red'
          onClick={() => deleteUser()}
          disabled={form.accoundId !== accountId}
        >
          영구적으로 계정 삭제
        </Common.Button>
      </HStack>
    </Common.ContentWrapper>
  );
};

export default Withdraw;
