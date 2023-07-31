import {
  Text,
  VStack,
  Input,
  Flex,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Center,
  Container,
  Button,
} from "@chakra-ui/react";
export default function Transcribe() {
  return (
    <>
      <Heading>Transcribe</Heading>
      <Flex marginTop={"15px"} flexDir="column">
        <Box flex={1}>
          <form>
            <FormControl>
              <FormLabel>Podcast Link</FormLabel>
              <Input
                type={"text"}
                name="link"
                placeholder="www.spotify.com/podcastlink"
              />
            </FormControl>
          </form>
        </Box>

        <Box marginTop={"15px"}>
          <form>
            <FormControl>
              <FormLabel>Podcast File .MP3 or .wav</FormLabel>
              <Input type={"file"} name="file" />
            </FormControl>
          </form>
        </Box>
        <Box marginTop={"15px"}>
          <form>
            <FormControl>
              <Button
                bg={"green.400"}
                type={"submit"}
                onClick={() => {
                  console.log("Hi");
                }}
              >
                Click!
              </Button>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </>
  );
}
