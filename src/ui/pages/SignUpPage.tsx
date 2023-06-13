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
        <Typography>Sign Up here</Typography>
        <form onSubmit={handleSubmit(onSignUp)}>
          <Controller
          name="fullName"
          control={control}
          render={({field})=>(
            <TextField {...field}  placeholder="Full Name" type="text"/>
          )}
          />
          <Controller
          name="email"
          control={control}
          render={({field})=>(
            <TextField {...field} placeholder="email" type="email" />
          )}
          />
          <Controller
          name="password"
          control={control}
          render={({field})=>(
            <TextField {...field} placeholder="password" type="password" />
          )}
          />
          <Button type="submit" variant="outlined" >Sign Up </Button>
        </form>
      </Container>
    </>
  );
}

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;


`;

export default SignUpPage;
