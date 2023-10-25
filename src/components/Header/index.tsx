import { GithubIcon } from '../../asset/icon';
import * as _ from './style';

const index = () => {
  return (
    <_.Container>
      <_.Logo>RECORDER</_.Logo>
      <_.LoginWrapper>
        <GithubIcon />
        <_.Login>로그인 / 회원가입</_.Login>
      </_.LoginWrapper>
    </_.Container>
  );
};

export default index;
