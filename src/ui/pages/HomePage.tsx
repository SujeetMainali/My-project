import { Box, Button, InputBase, styled } from "@mui/material";
import NavBar from "../organisms/NavBar";

const Container = styled(Box)`
  & > div > input[type="text"] {
    border-bottom: 1px solid black;
  opacity: 0.4;
  }
`;

function HomePage() {
  return (
    <>
      <div className="wrapper">
        <NavBar />
        <Container>
          <InputBase
            placeholder="title"
            // style={{ border: "1px solid black", margin: 2 }}
          ></InputBase>
          <Box component="span">30</Box>
          <InputBase
            placeholder="body"
            // style={{ border: "1px solid black", margin: 2 }}
          ></InputBase>
          <Box component="span">50</Box>
          <InputBase
            type="color"
            defaultValue={"#000000"}
            style={{ width: 20 }}
          ></InputBase>
          <Button variant="outlined">Create</Button>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
