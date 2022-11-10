import {
  Flex,
  Spacer,
  Center,
  Square,
  Text,
  Box,
  Image,
  Heading,
  HStack,
  Grid,
  GridItem
} from "@chakra-ui/react";

function BlueBox() {
  return (
    <div style={{ backgroundColor: "#003c8f" }}>
      <Flex color="white">
        <Center w="55%" h="800px">
          <Text
            fontSize="6xl"
            fontWeight="bold"
            textAlign="left"
            marginTop="-350px"
            w="90%"
          >
            MANAGE & TRACK ALL YOUR WORKOUTS IN ONE PLACE
          </Text>
          {/* <br/>
          <Text  fontSize="3xl" fontWeight="bold" >#1 Popular Workout Tracking Platform Stay Strong Together</Text> */}
         
        </Center>
       

        <Square w="45%" h="800px">
          <Image
            w="120%"
            src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-1536x1280.png"
            alt=""
          />
        </Square>
      </Flex>
    </div>
  );
}
export default BlueBox;
