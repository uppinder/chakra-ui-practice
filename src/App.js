import React from 'react';
import {
  Box,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  theme,
} from '@chakra-ui/react';

import rainbow from './Assets/images/rainbow.png';
import fb from './Assets/images/fb.svg';
import twitter from './Assets/images/twitter.svg';
import insta from './Assets/images/insta.svg';
import yt from './Assets/images/yt.svg';
import gold_heart from './Assets/images/gold-heart.png';
import white_woman from './Assets/images/white-woman.png';
import pink_flower from './Assets/images/pink-flower.png';
import smoker_dude from './Assets/images/smoker-dude.png';
import blacknwhite_woman from './Assets/images/blacknwhite-woman.png';
import black_woman_goggles from './Assets/images/black-woman-goggles.png';
import black_girl from './Assets/images/black-girl.png';
import blue_star from './Assets/images/blue-star.png';
import purple_image from './Assets/images/purple-image.png';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        width="100vw"
        min-height="100%"
        backgroundColor="#FDFEFF"
        paddingX="24"
        paddingY="12"
        justifyContent="space-between"
        alignItems="center"
        gap="5vw"
      >
        {/* Left */}
        <Flex
          width="40%"
          min-height="100%"
          flexDirection="column"
          justifyContent="space-around"
          gap="5vh"
        >
          <Box>
            <Image src={rainbow} alt="rainbow" />
          </Box>
          <Text
            fontFamily="Zilla Slab"
            fontWeight="700"
            fontSize="52px"
            color="#333"
            letterSpacing=".56px"
            lineHeight="1.1"
          >
            Bringing your community together
          </Text>
          <Text
            fontFamily="Inter"
            fontWeight="400"
            fontSize="18px"
            color="#252525"
            lineHeight="1.2"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget.
          </Text>

          <Box
            w="175px"
            h="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            px="40px"
            py="24px"
            backgroundColor="#202020"
            borderRadius="40px"
            cursor="pointer"
          >
            <Text
              color="#fff"
              fontFamily="Inter"
              fontWeight="500"
              fontSize="16px"
              lineHeight="1.2"
            >
              Get Started
            </Text>
          </Box>

          <Box
            marginTop="4vh"
            width="85%"
            max-height="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#fff"
            padding="12px"
            border="2px solid #333"
            boxShadow="8px 10px 0px 0px #333"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#333"
              padding="8px"
            >
              <Text
                color="#fff"
                fontFamily="Inter"
                fontWeight="300"
                fontSize="12px"
                fontStyle="italic"
                lineHeight="21px"
              >
                “The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.”
              </Text>
            </Box>
          </Box>

          <Flex
            marginTop="5vh"
            width="fit-content"
            justify="center"
            alignItems="center"
            gap="8px"
          >
            <Image src={fb} />
            <Image src={twitter} />
            <Image src={insta} />
            <Image src={yt} />
          </Flex>
        </Flex>

        {/* Right */}
        <Grid
          flex="1"
          height="100%"
          backgroundColor="teal"
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(4,1fr)"
        >
          <GridItem colSpan={1}>
            <Image height="100%" width="100%" src={gold_heart} />
          </GridItem>{' '}
          <GridItem colSpan={1}>
            <Image height="100%" width="100%" src={white_woman} />
          </GridItem>{' '}
          <GridItem colSpan={1}>
            <Image height="100%" width="100%" src={pink_flower} />
          </GridItem>{' '}
          <GridItem colSpan={1} rowSpan={2}>
            <Image height="100%" width="100%" src={smoker_dude} />
          </GridItem>{' '}
          <GridItem colSpan={2} rowSpan={1}>
            <Image height="100%" width="100%" src={blacknwhite_woman} />
          </GridItem>
          <GridItem colSpan={1} rowSpan={2}>
            <Image height="100%" width="100%" src={black_woman_goggles} />
          </GridItem>
          <GridItem colSpan={1}>
            <Image height="100%" width="100%" src={black_girl} />
          </GridItem>{' '}
          <GridItem colSpan={1}>
            <Image height="100%" width="100%" src={blue_star} />
          </GridItem>{' '}
          <GridItem colSpan={1}>
            <Image height="100%" width="100%" src={purple_image} />
          </GridItem>
        </Grid>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
