import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext } from "./Home";
import { Button, Container, Modal, Paper, TextField, Typography } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
import axios from "axios"

const Login = ({ logIn }: { logIn: Function }) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const context = useContext(UserContext);
    const [errors, setErrors] = useState<{ email: string; password: string }>({ email: "", password: "" });
    const [open, setOpen] = useState(false);
    const [newUser, setNewUser] = useState(false);

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const email = emailRef.current?.value || "";
        const password = passwordRef.current?.value || "";
        
        const emailError = email.trim() === "" ? "Email is required" : !isValidEmail(email) ? "Invalid email format" : "";
        const passwordError = password.trim() === "" ? "Password is required" : "";

        setErrors({ email: emailError, password: passwordError });

        if (emailError || passwordError) {
            return;
        }

        if (newUser)
        {
            try {
                const res = await axios.post('http://localhost:3000/api/user/register',
                    {
                        email: emailRef.current?.value,
                        password: passwordRef.current?.value
                    }
                )
                context?.userDispatch({
                    type: "CREATE_USER",
                    data: {email, password ,userId:res.data.userId}
                })
                logIn(true);
    
            }  catch (e) {
                if (axios.isAxiosError(e) && e.response?.status === 422) {
                    alert('User already signed up');
                }
            }     
        }

        else {
            try {
              const res = await axios.post('http://localhost:3000/api/user/login',
                    {
                        email: emailRef.current?.value,
                        password: passwordRef.current?.value
                    })
                    console.log(res.data)
                    context?.userDispatch({
                        type: "LOGIN_USER",
                        data: {email, password ,
                            userId:res.data.user.id,
                            firstName:res.data.user.firstName,
                            lastName:res.data.user.lastName,
                            address:res.data.user.address,
                            phoneNumber:res.data.user.phoneNumber
                        }
                    })
                    logIn(true);
            } catch (e) {
                if (axios.isAxiosError(e) && e.response?.status === 401) {
                    alert('User does not exist');
                }
            }
        }

        emailRef.current!.value = ''
        passwordRef.current!.value = ''
    }

    return (
        <>
            <Button sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1300 }}
                onClick={() => {setOpen(true);setNewUser(false)}} variant="contained" color="primary" endIcon={<LoginOutlined />}>
                LOG IN
            </Button>
            <Button sx={{ position: 'absolute', top: 20, left: 150, zIndex: 1300 }}
                onClick={() => {setOpen(true);setNewUser(true)}} variant="contained" color="primary" endIcon={<LoginOutlined />}>
                LOG UP
            </Button>
            <Modal open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="form-modal-title"
                aria-describedby="form-modal-description">
                <Container style={{ position: 'absolute', top: 200, left: 500, maxWidth: '35%' }}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5" align="center">Log In</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                id="filled-basic-email"
                                margin="normal"
                                fullWidth
                                type="text"
                                placeholder="email *"
                                label="email"
                                inputRef={emailRef}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <TextField
                                id="filled-basic-password"
                                margin="normal"
                                fullWidth
                                type="password"
                                placeholder="password *"
                                label="password"
                                inputRef={passwordRef}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                endIcon={<SendIcon />}
                                sx={{
                                    height: '45px',
                                    marginTop: '16px',
                                }}
                            >
                                Enter
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Modal>
        </>
    );
}

export default Login;

