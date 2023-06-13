import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";

interface IFormInputs {
  fullName: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

function SignUpPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IFormInputs>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSignUp: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    reset()
  };

  return (
    <>
      <Container>
        <Typography style={{ fontSize: 20, fontWeight: "bolder" }}>
          Sign Up here
        </Typography>
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
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Email"
                type="email"
                style={{ margin: 10 }}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Password"
                type="password"
                style={{ margin: 10 }}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          <Button
            type="submit"
            variant="outlined"
            style={{ width: 240, marginLeft: 10 }}
          >
            Sign Up
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

  form {
    display: flex;
    flex-direction: column;
  }
`;

export default SignUpPage;
