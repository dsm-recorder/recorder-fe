import * as _ from './style';
import { HStack } from '@/components/Stack';
import ExampleBlog from '@/asset/ExampleBlog.png';
import { HeartIcon } from '@/asset/icon';
import { projectType } from '@/api/projects/type';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({
  id,
  name,
  startDate,
  finishDate,
  userProfileUrl,
  userAccountId,
  likeCount,
  isLiked,
  logoImageUrl,
}: projectType) => {
  const navigate = useNavigate();

  const hadleMovePage = () => {
    navigate(`/project/${name}`, {
      state: { id },
    });
  }

  return (
    <_._Container onClick={hadleMovePage}>
      <_._IMG src={logoImageUrl} alt='blog image' />
      <_._CardInfo>
        <_._TEXT size={24} weight={700}>
          {name}
        </_._TEXT>
        <_._TEXT size={13} weight={300}>
          {startDate} ~ {finishDate}
        </_._TEXT>
        <HStack align='center' justify='space-between' margin='10px 0 0 0'>
          <HStack align='center' gap={6}>
            <_._UserProfileImg src={userProfileUrl} />
            <_._TEXT size={14} weight={400}>
              by
            </_._TEXT>
            <_._TEXT size={16} weight={600}>
              {userAccountId}
            </_._TEXT>
          </HStack>
          <HStack align='center' gap={9}>
            <HeartIcon cursor='pointer' isClicked={isLiked} />
            <_._TEXT size={14} weight={300}>
              {likeCount}
            </_._TEXT>
          </HStack>
        </HStack>
      </_._CardInfo>
    </_._Container>
  );
};

export default BlogCard;
