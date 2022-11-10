   
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    // MenuItemOption,
    // MenuGroup,
    // MenuOptionGroup,
    // MenuDivider,
    Button,
    Box,
    Image,
  } from "@chakra-ui/react";
  import { Flex} from "@chakra-ui/react";
  
  import { ChevronDownIcon } from "@chakra-ui/icons";
//   import { Icon, createIcon } from "@chakra-ui/react";


function Navbar(){

    return (
        <div>
            <Flex>
            <Box bg="#3182CE"  p={5} color="#3182CE" w="100%" h="100px">
              <Box boxSize="auto" marginTop="10px">
                <Image
                  src="https://www.jefit.com/wp/wp-content/uploads/2017/07/cropped-logo_155_40_white-120x31.png"
                  alt="logo"
                />
              </Box>
              <Menu color="#3182CE" px={10}>
                <MenuButton
                  as={Button}
                  _hover={{ bg: "blue.400" }}
                  rightIcon={<ChevronDownIcon />}
                  color="white"
                  bg="#3182CE"
                  marginTop="-50px"
                  fontSize="20px"
                >
                  Get App
                </MenuButton>
                <MenuList _hover={{ bg: "#2B6CB0" }} bg="#3182CE" color="white" h="140px" margin="auto" borderRadius="none">
                  <MenuItem
                    _hover={{ bg: "#2B6CB0" }}
                    color="white"
                    bg="#3182CE"
                    fontSize="20px"
                  >
                    Workout App<br/>
                    (ios)
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#2B6CB0" }}
                    color="white"
                    bg="#3182CE"
                    fontSize="20px"
                  >
                   Workout App<br/>
                   (Android)
                  </MenuItem>
                </MenuList>
              </Menu>
          
              {/* <=======================================================================>            */}

              {/* <==============================================================================>            */}
              <Menu color="#3182CE" px={10}>
                <MenuButton
                  as={Button}
                  _hover={{ bg: "blue.400" }}
                  rightIcon={<ChevronDownIcon />}
                  color="white"
                  bg="#3182CE"
                  marginTop="-50px"
                  fontSize="20px"
                >
                  Workout Plans
                </MenuButton>
                <MenuList _hover={{ bg: "#2B6CB0" }} bg="#3182CE" color="white" h="140px" margin="auto" borderRadius="none">
                  <MenuItem
                    _hover={{ bg: "#2B6CB0" }}
                    color="white"
                    bg="#3182CE"
                    fontSize="20px"
                  >
                    Pro-Designed plans
                    <br/>
                    
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#2B6CB0" }}
                    color="white"
                    bg="#3182CE"
                    fontSize="20px"
                  >
                    <br/>
                  Create my plan
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* <=========================================================================================> */}

              <Menu color="#3182CE" px={10}>
                <MenuButton
                  as={Button}
                  _hover={{ bg: "blue.400" }}
                  color="white"
                  bg="#3182CE"
                  marginTop="-50px"
                  fontSize="20px"
                >
                  Exercises
                </MenuButton>
                <MenuList _hover={{ bg: "#2B6CB0" }} bg="#3182CE" color="white">
                  <MenuItem
                    _hover={{ bg: "#2B6CB0" }}
                    color="white"
                    bg="#3182CE"
                  >
                    Download
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#2B6CB0" }}
                    color="white"
                    bg="#3182CE"
                  >
                    Create a Copy
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* <====================================================================================>             */}
              <Menu color="#3182CE" px={10}>
                <MenuButton
                  as={Button}
                  _hover={{ bg: "blue.400" }}
                  rightIcon={<ChevronDownIcon />}
                  color="white"
                  bg="#3182CE"
                  marginTop="-50px"
                  fontSize="20px"
                >
                  Community
                </MenuButton>
                <MenuList _hover={{ bg: "#2B6CB0" }} bg="#3182CE" color="white">
                  <MenuItem
                    _hover={{ bg: "#2B6CB0" }}
                    color="white"
                    bg="#3182CE"
                  >
                   Jet Fit Community
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "#2B6CB0" }}
                    color="white"
                    bg="#3182CE"
                  >
                   Blog
                  </MenuItem>
                </MenuList>
              </Menu>

              {/* <==================================================================================>           */}
              <Menu color="#3182CE" px={10}>
                <MenuButton
                  as={Button}
                  _hover={{ bg: "blue.400" }}
                  color="white"
                  bg="#3182CE"
                  marginTop="-50px"
                  fontSize="20px"
                >
                  Coach
                </MenuButton>
              </Menu>

              {/* <===============================================================================>             */}
              {/* <==================================================================================>           */}
              <Menu color="#3182CE" px={10}>
                <MenuButton
                  as={Button}
                  _hover={{ bg: "blue.400" }}
                  color="white"
                  bg="#3182CE"
                  marginTop="-50px"
                  fontSize="20px"
                >
                  Elite
                </MenuButton>
              </Menu>

              {/* <===============================================================================>             */}
              {/* <==================================================================================>           */}
              <Menu color="#3182CE" px={10}>
                <MenuButton
                  as={Button}
                  _hover={{ bg: "blue.400" }}
                  color="white"
                  bg="#3182CE"
                  marginTop="-50px"
                  fontSize="20px"
                >
                  Login
                </MenuButton>
              </Menu>

              {/* <===============================================================================>             */}

              <Button
                as={Button}
                _hover={{ bg: "#3182CE" }}
                color="blue"
                bg="white"
                marginTop="-50px"
                fontSize="20px"
                w="180px"
                h="40px"
                marginLeft="30px"
              >
                Signup

                
              </Button>
            </Box>
          </Flex>
        </div>
    )
}
export default Navbar


