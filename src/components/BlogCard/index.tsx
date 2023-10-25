import * as _ from './style';
import { HStack } from '../Stack';
import ExampleBlog from '../../asset/ExampleBlog.png';
import ExampleUserProfile from '../../asset/ExampleUserProfile.png';
import { HeartIcon } from '../../asset/icon';

const BlogCard = () => {
  return (
    <_._Container>
      <_._IMG src={ExampleBlog} alt='blog image' />
      <_._CardFooter>
        <HStack align='center' gap={22}>
          <_._UserProfileImg src={ExampleUserProfile} />
          <_._TEXT>얄리얄리 얄라셩 E = mc</_._TEXT>
        </HStack>
        <HStack align='center' gap={9}>
          <HeartIcon cursor='pointer' />
          <_._TEXT>999</_._TEXT>
        </HStack>
      </_._CardFooter>
    </_._Container>
  );
};

export default BlogCard;
