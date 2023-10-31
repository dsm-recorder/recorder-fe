import * as _ from './style';
import { Link } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { GithubIcon } from '../../asset/icon';
import { HStack } from '../Stack';
import { GetUserInfo } from '../../api/users';

const index = () => {
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');
  const { data } = GetUserInfo();

  return (
    <_._Container>
      <Link to='/'>
        <_._Logo>RECORDER</_._Logo>
      </Link>
      {accessToken ? (
        <HStack align='center' gap={10}>
          <_._UserImg src={data?.profileImageUrl} />
          <_._UserName>{data?.accountId}</_._UserName>
        </HStack>
      ) : (
        <_._LoginWrapper>
          <GithubIcon />
          <_._Login
            onClick={() =>
              (window.location.href =
                'http://52.79.89.3:3030/auth/oauth/github')
            }
          >
            로그인 / 회원가입
          </_._Login>
        </_._LoginWrapper>
      )}
    </_._Container>
  );
};

export default index;
