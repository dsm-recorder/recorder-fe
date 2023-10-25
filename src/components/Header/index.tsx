import { Cookies } from 'react-cookie';
import { GithubIcon } from '../../asset/icon';
import * as _ from './style';

const index = () => {
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');
  return (
    <_.Container>
      <_.Logo>RECORDER</_.Logo>
      {accessToken ? (
        <div>로그인 됨</div>
      ) : (
        <_.LoginWrapper>
          <GithubIcon />
          <_.Login
            onClick={() =>
              (window.location.href =
                'http://52.79.89.3:3030/auth/oauth/github')
            }
          >
            로그인 / 회원가입
          </_.Login>
        </_.LoginWrapper>
      )}
    </_.Container>
  );
};

export default index;
