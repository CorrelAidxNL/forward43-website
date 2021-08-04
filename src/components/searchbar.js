import React from "react";
import { 
  InputGroup, 
  InputLeftElement, 
  Center,
  Input,
  VStack,
  HStack,
  Image,
  Button
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import {
  useHistory
} from "react-router-dom";


const SearchBar = (props) => {

  let history             = useHistory();
  const [value, setValue] = React.useState("")
  const handleChange      = (event) => setValue(event.target.value)

  function onSearch(searchTerm) {

    if (searchTerm.length > 0) {
      let query = searchTerm.replace(/\s+/g, '+').toLowerCase();
      history.push("/search?query=" + query);
    }
  }

  return (
    <Center 
      h  = "400px" 
      ml = {20} 
      mr = {20}
    >

      <VStack spacing = {5}>
        <Image src = "images/forward43.png"/>
        <InputGroup>
          <InputLeftElement
            pointerEvents = "none"
            children      = {<SearchIcon color="gray.500" />}
          />
          <Input 
            w           = {450} 
            placeholder = "Search for innovations"
            value       = {value}
            onChange    = {handleChange}
          />
        </InputGroup>
        <HStack spacing = {4}>
          <Button 
            fontWeight = "normal" 
            size       = "sm" 
            variant    = "outline"
            onClick    = {() => onSearch(value)}
          >
            Search
          </Button>
          <Button fontWeight="normal" size="sm" variant="outline">Advanced</Button>
        </HStack>

      </VStack>
    </Center>
  );
};

export default SearchBar;
