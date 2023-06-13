import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface IFormInputs {
  fullName: string;
  email: string;
  password: string;
}
function SignUpPage() {
  const { control, handleSubmit } = useForm<IFormInputs>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSignUp:SubmitHandler<IFormInputs> = (data)=>{
    console.log(data);
    
  }
  return (
    <>
      <Container>
        <Typography style={{fontSize:20, fontWeight:'bolder'}}>Sign Up here</Typography>
        <form onSubmit={handleSubmit(onSignUp)}>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Full Name"
                type="text"
                style={{ margin: 10 }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="email"
                type="email"
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
                placeholder="password"
                type="password"
                style={{ margin: 10 }}
              />
            )}
          />
          <Button
            type="submit"
            variant="outlined"
            style={{ width: 240, marginLeft: 10 }}
          >
            Sign Up{" "}
          </Button>
        </form>
      </Container>
    </>
  );
}

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

form{
  display: flex;
  flex-direction: column;
}
`;

export default SignUpPage;
