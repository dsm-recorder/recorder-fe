import * as _ from './style';
import { Link, useLocation } from 'react-router-dom';
import { GithubIcon } from '@/asset/icon';
import { HStack } from '@/components/Stack';
import { GetUserInfo } from '@/api/users';
import { customCookie } from '@/util/customCookie';
import { TabMenu } from '@/constant/header';

const index = () => {
  const location = useLocation();
  const accessToken = customCookie.get.accessToken();
  const { data } = GetUserInfo();

  return (
    <_._Container>
      <HStack gap={130}>
        <Link to='/'>
          <_._Logo>RECORDER</_._Logo>
        </Link>
        <HStack gap={80}>
          {accessToken &&
            TabMenu.map((menu) => (
              <Link to={menu.url}>
                <_._TabMenuWrapper>
                  {menu.tab}
                  {location.pathname === menu.url && <_._BAR />}
                </_._TabMenuWrapper>
              </Link>
            ))}
        </HStack>
      </HStack>
      {accessToken ? (
        <HStack align='center' gap={10}>
          <_._UserName>{data?.accountId}</_._UserName>
          <_._UserImg src={data?.profileImageUrl} />
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
