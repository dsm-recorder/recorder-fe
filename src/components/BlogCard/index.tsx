import * as _ from './style';
import { HStack } from '@/components/Stack';
import ExampleBlog from '@/asset/ExampleBlog.png';
import { HeartIcon } from '@/asset/icon';
import { MonthlyProjectType } from '@/api/projects/type';

const BlogCard = ({
  name,
  startDate,
  finishDate,
  userProfileUrl,
  userAccountId,
  likeCount,
  isLiked,
}: MonthlyProjectType) => {
  return (
    <_._Container>
      <_._IMG src={ExampleBlog} alt='blog image' />
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
