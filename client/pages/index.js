import Head from 'next/head'
import React,{useState} from 'react'
import {Box, Flex, Heading,Button ,Text, Grid, Center, Divider, Input,Link, Image} from '@chakra-ui/react'

export default function Home() {
  const [imageInput, setImageInput] = useState("");
  const [result, setResult] = useState([]);


  async function onSubmit(event) {
    try {
      event.preventDefault();
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageInput }),
      });
      const data = await response.json();
      setResult(data.result);
      console.log(data.result)
      setImageInput("");
    } catch (error) {
      console.error(error);
      setResult("An error occurred while generating the image");
    }
  }  
  
  return (
    <Flex display="flex" h={'100vh'} bg="black" direction="column">
      <Head>
        <title>OpenAI: Image Generator</title>
        <meta name="description" content="Text to Image Generator using OpenAI, Chakra UI, Next.JS and Node.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
        <Center>
        <Flex display="flex" direction="column">
            <Heading color="white" fontSize="88px">Image Generator</Heading>
            <Divider/>
        <form onSubmit={onSubmit}>
          <Input mt={10}
            focusBorderColor='pink.400'
            color='pink.300'
            type="text"
            name="image"
            placeholder="Enter Image"
            variant='filled'
            value={imageInput}
            onChange={(e) => setImageInput(e.target.value)}
          />
          <Button mt={10} colorScheme="red" variant="solid" type="submit">Generate Image</Button>
        </form>
        <Box>
     
        <Text mt={10}  color="white">Result:</Text>

            <Image src={result} alt="Generated image"  boxShadow="2xl" boxSize="600px"/>
 
          </Box>
          </Flex>
          </Center>
      </Flex>
  )
}
