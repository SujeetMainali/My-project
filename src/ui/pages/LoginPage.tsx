import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  email: string;
  password: string;
}
function LoginPage() {
  const { control, handleSubmit } = useForm<IFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <>
      <Container>
        <Typography style={{fontSize:25, fontWeight:'bolder'}}>LoginPage</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="email"
                placeholder="Email"
                style={{ margin: 10 }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                style={{ margin: 10 }}
              />
            )}
          />
          {/* <Box component="span" /> */}
          {/* <input type="submit" style={{margin:10, background:'blue'}} /> */}
          <Button variant="outlined" type="submit" style={{width: 240, marginLeft: 10}}>Submit </Button>
        </form>
      </Container>
    </>
  );
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  /* border: 2px solid black; */
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 10px;
  }
`;

export default LoginPage;
