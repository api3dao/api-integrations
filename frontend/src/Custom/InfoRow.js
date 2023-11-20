import { Text, Flex, Image } from '@chakra-ui/react';
import { COLORS } from '../data/constants';

const InfoRow = ({ text, onClick }) => {
  return text === null ? null : (
    <Flex
      gap={2}
      direction="row"
      align="left"
      cursor={'pointer'}
      alignItems={'center'}
      bgColor={COLORS.info}
      p={2}
      borderRadius={'md'}
      onClick={() => onClick(text)}
    >
      <Image src={'./history.svg'} alt="info" width={4} height={4} />
      <Text fontWeight={'bold'} fontSize={'sm'}>
        {text}
      </Text>
    </Flex>
  );
};

export default InfoRow;
