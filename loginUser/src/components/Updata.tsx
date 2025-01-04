import { Button, Container, Modal, Paper, TextField, Typography } from "@mui/material";
import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext } from "./Home";
import SendIcon from '@mui/icons-material/Send';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import LogoutIcon from '@mui/icons-material/Logout';

const Update = ({ logIn }: { logIn: Function }) => {
    const fNameRef = useRef<HTMLInputElement>(null)
    const lNameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const phonedRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const [open, setOpen] = useState(false)
    const context = useContext(UserContext)


    const [userUpdate, setUserUpdate] = useState({
        firstName: context.user.firstName,
        lastName: context.user.lastName,
        Password: context.user.password,
        email: '',
        address: '',
        phone: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserUpdate(p => ({ ...p, [name]: value }))
    }


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        context?.userDispatch({
            type: "UPDATE_USER", data: userUpdate
        })
        setOpen(false)
    }

    return (
        <>
            <Button onClick={() => setOpen(true)} variant="contained" color="primary" sx={{position: 'absolute',top: 100,left: 15,zIndex: 1300}} endIcon={<BrowserUpdatedIcon/>}>Update</Button>

            <Modal open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="form-modal-title"
                aria-describedby="form-modal-description">
                <Container style={{ position: 'absolute', top: 100, left: 500, maxWidth: '35%' }}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5" align="center">Update your details</Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                name="firstName"
                                id="filled-basic"
                                margin="normal"
                                fullWidth
                                label="first name"
                                value={userUpdate.firstName}
                                onChange={handleChange}
                                inputRef={fNameRef} />

                            <TextField
                                name="lastName"
                                id="filled-basic"
                                margin="normal"
                                fullWidth
                                label="last name"
                                value={userUpdate.lastName}
                                onChange={handleChange}
                                inputRef={lNameRef} />

                            <TextField
                                name="password"
                                id="filled-basic"
                                margin="normal"
                                fullWidth
                                label="password"
                                type="password"
                                value={userUpdate.Password}
                                onChange={handleChange}
                                inputRef={passwordRef} />

                            <TextField
                                name="email"
                                id="filled-basic"
                                margin="normal"
                                fullWidth
                                label="email"
                                value={userUpdate.email}
                                onChange={handleChange}
                                inputRef={emailRef} />

                            <TextField
                                id="filled-basic"
                                margin="normal"
                                fullWidth
                                label="phone"
                                value={userUpdate.phone}
                                onChange={handleChange}
                                inputRef={phonedRef} />

                            <TextField
                                value={userUpdate.address}
                                onChange={handleChange}
                                id="filled-basic"
                                margin="normal"
                                fullWidth
                                label="address"
                                inputRef={addressRef} />

                            <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} fullWidth sx={{height: '45px',marginTop: '16px', 
                                }}>SEND</Button>
                        </form>
                    </Paper>
                </Container>
            </Modal>
            <Button onClick={() => logIn(false)} variant="contained" color="primary" sx={{position: 'absolute',top: 150,left: 15,zIndex: 1300}} endIcon={<LogoutIcon/>}>LOG OUT</Button>

        </>
    );
}

export default Update