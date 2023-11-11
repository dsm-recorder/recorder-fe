import * as _ from './style';
import { HStack, VStack } from '@/components/Stack';
import { GithubIcon, LogoIcon } from '@/asset/icon';

const Footer = () => {
  return (
    <_._Container>
      <VStack gap={10}>
        <HStack align='center' justify='space-between'>
          <HStack gap={100} align='center'>
            <_._TEXT size={28}>Recorder</_._TEXT>
            <_._TEXT size={14}>Copyright 2023 Recorder</_._TEXT>
          </HStack>
          <_._TEXT size={14}>GET TO KNOW US</_._TEXT>
        </HStack>
        <HStack justify='space-between'>
          <a href='#main'>
            <_._Logo>
              <LogoIcon />
            </_._Logo>
          </a>
          <a target='_blank' href='https://github.com/dsm-recorder'>
            <GithubIcon color='white' />
          </a>
        </HStack>
      </VStack>
    </_._Container>
  );
};

export default Footer;
