import { FormEvent, useContext, useRef, useState, } from "react";
import { UserContext } from "./Home";
import { Button, Container, Modal, Paper, TextField, Typography } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';


const Login = ({ logIn }: { logIn: Function }) => {

    const nameFRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const context = useContext(UserContext)
    const [errors, setErrors] = useState({ name: false, password: false });
    const [open, setOpen] = useState(false)

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const name = nameFRef.current?.value || "";
        const password = passwordRef.current?.value || "";
        const newErrors = {
            name: name.trim() === "",
            password: password.trim() === "",
        };
        setErrors(newErrors);

        if (newErrors.name || newErrors.password) {
            return;
        }
        console.log(context.user.firstName)//בפעמים הבאות לבדוק שזה אותו משתמש
        if (context.user.firstName != "" && nameFRef.current?.value === context.user.firstName && passwordRef.current?.value == context.user.password) {
            logIn(true);
        }
        else if (context.user.firstName === "") {//בפעם הראשונה ליצור משתמש חדש
            context.userDispatch({
                type: "CREATE_USER",
                data: { firstName: nameFRef.current?.value || '', password: passwordRef.current?.value || '' }
            })
            logIn(true);
        }

    }
    return (
        <>
            <Button sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1300 }}
                onClick={() => { setOpen(true) }} variant="contained" color="primary" endIcon={<LoginOutlined />}>LOG IN</Button>
            <Modal open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="form-modal-title"
                aria-describedby="form-modal-description">
                <Container style={{ position: 'absolute', top: 200, left: 500, maxWidth: '35%' }}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5" align="center">Log In </Typography>

                        <form onSubmit={handleSubmit}>

                            <TextField hiddenLabel
                                id="filled-basic"
                                margin="normal"
                                fullWidth
                                type='text'
                                placeholder="first name *"
                                label="first name"
                                inputRef={nameFRef}
                                error={errors.name}
                                helperText={errors.name ? "This field is required" : ""}
                            />


                            <TextField id="filled-basic"
                                margin="normal"
                                fullWidth type='password'
                                placeholder="password *"
                                label="password"
                                inputRef={passwordRef}
                                error={errors.password}
                                helperText={errors.password ? "This field is required" : ""}
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

        </>);
}

export default Login


