import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-[70vh] gap-6">
        <h1 className="flex items-center justify-center mt-16 font-semibold text-5xl">
          Login Page
        </h1>
        <TextField
          id="filled-basic"
          label="E-mail"
          variant="filled"
          type="email"
          color="secondary"
          sx={{ width: 400 }}
          required
        />
        <TextField
          id="filled-basic"
          label="Password"
          variant="filled"
          type="password"
          color="secondary"
          required
          sx={{ width: 400 }}
        />
        <Button variant="contained" sx={{ width: 400 }} color="secondary">
          Sign In
        </Button>
      </div>
    </>
  );
}
