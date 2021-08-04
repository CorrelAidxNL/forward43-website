import React from "react";
import {
  chakra,
  Box,
  Flex,
  Container,
  Link,
  Fade,
} from "@chakra-ui/react";


const ProjectCard = (props) => {

  let title       = props.title;
  let description = props.description;
  let status      = props.status;
  let link        = props.link;

  return (
    <Container bg = "white" w = "full">

      <Fade in = "true">
        <Box
          mx   ="auto"
          px   = {8}
          py   = {4}
          bg   = "white"
          maxW = "2xl"
        >
          <Flex justifyContent = "space-between" alignItems = "center">
            <chakra.span fontSize = "sm" color = "gray.600">
              Status: {status}
            </chakra.span>
          </Flex>

          <Box mt={2}>
            <Link
              fontSize   = "2xl"
              color      = "gray.700"
              fontWeight = "700"
              _hover     = {{
                color     : "gray.600",
                textDecor : "underline",
              }}
              href       = {link} isExternal
            >
              {title}
            </Link>
            <chakra.p mt = {2} color = "gray.600">
              {description}
            </chakra.p>
          </Box>

          <Flex justifyContent = "space-between" alignItems = "center" mt = {4}>
            <Link
              color  = "brand.600"
              _hover = {{ textDecor: "underline" }}
              href   = {link} isExternal
            >
              Read more
            </Link>
          </Flex>
        </Box>

      </Fade>
    </Container>
  );
};

export default ProjectCard;
