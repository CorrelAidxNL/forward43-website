import React from "react";
import {
  chakra,
  HStack,
  Link,
  Flex,
  Image,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
} from "@chakra-ui/react";

import { useViewportScroll } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { Link as ReactLink } from "react-router-dom";


export default function Header(props) {

  const bg         = "white";
  const ref        = React.useRef();
  const [y, setY]  = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const cl        = "gray.800";
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos           = "absolute"
      top           = {0}
      left          = {0}
      right         = {0}
      display       = {mobileNav.isOpen ? "flex" : "none"}
      flexDirection = "column"
      p             = {2}
      pb            = {4}
      m             = {2}
      bg            = {bg}
      spacing       = {3}
      rounded       = "sm"
      shadow        = "sm"
    >
      <CloseButton
        aria-label  = "Close menu"
        justifySelf = "self-start"
        onClick     = {mobileNav.onClose}
      />
      <Link href = "/" style = {{ textDecoration: 'none' }}>
        <Button w = "full" variant = "ghost">
          Forward43
        </Button>
      </Link>
      <Link 
        as    = {ReactLink} 
        to    = "/about"
        style = {{ textDecoration: 'none' }}
      >
        <Button w = "full" variant = "ghost">
          About
        </Button>
      </Link>
      <Link
        as    = {ReactLink} 
        to    = "/contact"
        style = {{ textDecoration: 'none' }}
      >
        <Button w = "full" variant = "ghost">
          Contact
        </Button>
      </Link>
      {/* <Button w = "full" variant = "ghost" leftIcon = {<BsFillCameraVideoFill />}>
        Contact
      </Button> */}
    </VStack>
  );
  return (
    <React.Fragment>
      <chakra.header
        ref        = {ref}
        shadow     = {y > height ? "sm" : undefined}
        transition = "box-shadow 0.2s"
        bg         = {bg}
        w          = "full"
        // pt         = {2}
        overflowY  = "hidden"
        borderTop         = "6px solid"
        borderTopColor    = "brand.400"
        borderBottomWidth = {1}
        borderBottomColor = {useColorModeValue("gray.200", "gray.900")}
      >
        <chakra.div h = "6rem" mx = "auto" maxW = "1200px">
          <Flex
            w              = "full"
            h              = "full"
            px             = "6"
            alignItems     = "center"
            justifyContent = "space-between"
          >
            <Flex align = "flex-start">
              <Link href = "/">
                <Image 
                  src       = "images/masterpeace-logo.png"
                  fallback  = "Masterpeace"
                  htmlWidth = "220px"
                ></Image>
              </Link>
            </Flex>
            <Flex justify = "flex-end" align = "center" color = "gray.400">
              <HStack spacing = "5" display = {{ base: "none", md: "flex" }}>
                <Link href = "/" style = {{ textDecoration: 'none' }}>
                  <Button
                    bg         = {bg}
                    color      = "gray.700"
                    display    = "inline-flex"
                    alignItems = "center"
                    fontSize   = "md"
                    _hover     = {{ color: cl, bg: "gray.200" }}
                    _focus     = {{ boxShadow: "none" }}
                  >
                    Home
                  </Button>
                </Link>
                <Link 
                  as    = {ReactLink} 
                  to    = "/about"
                  style = {{ textDecoration: 'none' }}
                >
                  <Button
                    bg         = {bg}
                    color      = "gray.700"
                    display    = "inline-flex"
                    alignItems = "center"
                    fontSize   = "md"
                    _hover     = {{ color: cl, bg: "gray.200" }}
                    _focus     = {{ boxShadow: "none" }}
                  >
                    About
                  </Button>
                </Link>
                <Link
                  as    = {ReactLink} 
                  to    = "/contact"
                  style = {{ textDecoration: 'none' }}
                >
                  <Button
                    bg         = {bg}
                    color      = "gray.700"
                    display    = "inline-flex"
                    alignItems = "center"
                    fontSize   = "md"
                    _hover     = {{ color: cl, bg: "gray.200" }}
                    _focus     = {{ boxShadow: "none" }}
                  >
                    Contact
                  </Button>
                </Link>
              </HStack>
              <IconButton
                display    = {{ base: "flex", md: "none" }}
                aria-label = "Open menu"
                fontSize   = "20px"
                color      = {useColorModeValue("gray.800", "inherit")}
                variant    = "ghost"
                icon       = {<AiOutlineMenu />}
                onClick    = {mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}
