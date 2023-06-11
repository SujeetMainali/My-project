import { useForm } from "react-hook-form";
function LoginPage() {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div>LoginPage</div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >

        <input type="text" placeholder="Email" {...register('email')} />
        <input type="text" placeholder="password" {...register('password')} />
        <input type="submit" />
      </form>
    </>
  );
}

export default LoginPage;
