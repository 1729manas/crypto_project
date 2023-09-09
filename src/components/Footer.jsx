import React from 'react'
import { Avatar, Box, Stack, Text, VStack ,Heading,Button} from "@chakra-ui/react";
const avatarsrc="https://avatars.githubusercontent.com/u/111834372?s=96&v=4"
const Footer = () => {

  return (
   
      <Box
      bgColor={"blackAlpha.600"}
      color={"whiteAlpha.800"}
      minH={"44"}
      px={"16"}
      py={["8", "4"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
           One of the trading app where you can see latest crypto details
          </Text>
        </VStack>
        <VStack w={'full'}>
        <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="- linkedin.com/in/manas-mishra-4b959422b/">
              LinkedIn
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://instagram.com/manas_mishra_0907?utm_source=qr&igshid=MThlNWY1MzQwNA==">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/1729manas">
              Github
            </a>
          </Button>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarsrc} />
          <Text>Our Founder</Text>
        </VStack>
       
      </Stack>
   </Box>
  )
}

export default Footer
