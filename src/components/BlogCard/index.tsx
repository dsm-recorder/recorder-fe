import * as _ from './style';
import { HStack } from '@/components/Stack';
import ExampleBlog from '@/asset/ExampleBlog.png';
import ExampleUserProfile from '@/asset/ExampleUserProfile.png';
import { HeartIcon } from '@/asset/icon';

const BlogCard = () => {
  return (
    <_._Container>
      <_._IMG src={ExampleBlog} alt='blog image' />
      <_._CardInfo>
        <_._TEXT size={24} weight={700}>
          XQUARE
        </_._TEXT>
        <_._TEXT size={13} weight={300}>
          2023-11-10 ~ 2023-11-10
        </_._TEXT>
        <HStack align='center' justify='space-between' margin='10px 0 0 0'>
          <HStack align='center' gap={6}>
            <_._UserProfileImg src={ExampleUserProfile} />
            <_._TEXT size={14} weight={400}>
              by
            </_._TEXT>
            <_._TEXT size={16} weight={600}>
              얄리얄리 얄라셩 E = mc
            </_._TEXT>
          </HStack>
          <HStack align='center' gap={9}>
            <HeartIcon cursor='pointer' />
            <_._TEXT size={14} weight={300}>
              999
            </_._TEXT>
          </HStack>
        </HStack>
      </_._CardInfo>
    </_._Container>
  );
};

export default BlogCard;
