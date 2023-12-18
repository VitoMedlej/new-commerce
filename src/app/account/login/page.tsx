"use client"
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    Typography,
    Grid,
    Container,
    CssBaseline,
    Box,
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    FormControl,
} from '@mui/material';
import Link from 'next/link'
import { useState} from 'react';
import {AiOutlineEye,AiOutlineLock,AiOutlineEyeInvisible} from 'react-icons/ai';
import { useRouter } from 'next/navigation';




const LoginForm = () => {
const router= useRouter()
const [error, setError] = useState(''); 
    const [showPassword,
        setShowPassword] = useState(false);
    const [isLoading,
        setLoading] = useState(false);
        const [creds,
            setCreds] = useState({email:'',password:''})
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event : React.MouseEvent < HTMLButtonElement >) => {
        event.preventDefault();
    };
    // const {error,password, setPassword , handleSubmit, isLoading} = LoginHook()
    const handleSubmit = async (event : any ) => {    
        event.preventDefault();
        try {
            if (!creds?.email) {
                setError('Please enter a valid email address');
                return;
            }
            
            // Regular expression to validate email format
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            
            if (!emailRegex.test(creds.email)) {
                setError('Invalid email format');
                return;
            }
            
            // Password Validation
            if (!creds?.password) {
                setError('Please enter a password');
                return;
            }
            
            if (creds.password.length < 6) {
                setError('Password must be at least 6 characters long');
                return;
            }  
        const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/login`,{
            method: "post",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            
            //make sure to serialize your JSON body
            body: JSON.stringify({
            email: creds.email,
            password: creds.password,

            })
            })
        const res = await req.json();
        console.log('res: ', res);
        if (res?.success && res?.jwt  && res?.jwt?.length > 5  && res?.user) {
            localStorage.setItem('Km0v2zT1mg',JSON.stringify(res?.jwt))
            localStorage.setItem('IONn41-rKV2Vda',JSON.stringify(res?.user))
            router.push('/profile')
        }
        else {
            if (res?.message && !res?.success) {}
            setError(`Error signing you in, ${res?.message}`)
        }
    }
    catch(err) {
        console.log('err: ', err);
        setError('Something went wrong..')
    }
    }

    return (
            <Container component="main" maxWidth='sm' sx={{
                width: '100%',mt:20,maxWidth:'400px'
            }}>
                <CssBaseline/>
                <Box
                    sx={{
                        mt:20,
                    boxShadow: 'rgb(0 0 0 / 15%) 0px 8px 24px',
                    p: {
                        xs: ' 2em 1em',
                        md: '2em 3em '
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar
                    className='bg'
                        sx={{
                        m: 1,
                        // bgcolor: '#d42c2a'
                    }}>
                        <AiOutlineLock/>
                    </Avatar>
                    <Typography
                        sx={{
                        fontSize: "1em",
                        textAlign: 'center'
                    }}
                        color={error
                        ? 'red'
                        : 'black'}
                        component="h1">
                        {error?.length > 1
                            ? error
                            : 'Sign in'}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                        mt: 1
                    }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={creds.email}
                            onChange={(e)=>setCreds({...creds,email:e.target.value})}
                            data-cy='create-email'
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus/>

                        <FormControl
                            sx={{
                            mt: 1,
                            width: '100%'
                        }}
                            variant="outlined">

                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                sx={{
                                width: '100%'
                            }}
                            
                            value={creds.password}
                            onChange={(e)=>setCreds({...creds,password:e.target.value})}
                                id="outlined-adornment-password"
                                type={showPassword
                                ? 'text'
                                : 'password'}
                                endAdornment={< InputAdornment position = "end" > <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end">
                                {showPassword
                                    ? <AiOutlineEyeInvisible/>
                                    : <AiOutlineEye/>}
                            </IconButton> 
                            </InputAdornment>}
                                label="Password"/>
                        </FormControl>

                        <FormControlLabel
                            control={< Checkbox value = "remember" color = "primary" />}
                            label="Remember me"/>
                        <Button
    className='bg'
disabled={isLoading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                            mt: 3,
                            border: !isLoading
                                ? "1px solid "
                                : 'none',
                            mb: 2,
                            ":hover": {
                                color:'black',
                                background: 'white !important',
                                border: "1px solid black"
                            }
                        }}>
                            Sign In
                        </Button>

                        <Grid container>

                            <Grid className='link' item>
                                <Link href="/account/register">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
               
<Box sx={{my:4}}>

<Typography
            className='link'
            variant="body2"
            color="text.secondary"
            align="center"
          >
            {'Copyright © '}
            <a target='_blank' href="https://onbeirut.com">
                OnBeirut Agency
            </a>{' '} {new Date().getFullYear()}
            {'.'}
        </Typography>
        </Box>

            </Container>
    );
}
export default LoginForm