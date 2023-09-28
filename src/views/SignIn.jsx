import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import OAuth from '../components/OAuth'
import ArrowRightIcon from '../assets/keyboardArrowRightIcon.svg';
 






function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()

  const handleToggle = () => {
   setShowPassword((prevState) => !prevState)
  //   if (type==='password'){
  //     setIcon(eye);
  //     setType('text')
  //  } else {
  //     setIcon(eyeOff)
  //     setType('password')
  //  }
  }


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }


  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Bad User Credentials')
    }
  }

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
             
          
           <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
              autoComplete="current-password"
            />
            {/* <button 
            // <img alt="apssword"
              title={setShowPassword ? "Hide password" : "Show password"}
              // src={showPassword ? notvisibleIcon  :visibilityIcon }
              onClick={() => setShowPassword(prevState => !prevState)}
              // role='presentation'
            /> */}
             <button
              onClick={handleToggle}>
        {showPassword ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#04ddd7"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
xmlns="http://www.w3.org/2000/svg"
            fill="#04777d"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
          </div>
          


         

          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>

          <div className='signInBar'>
          <p className='signInText'>Sign In</p>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button> 
          </div>
        </form>

        <OAuth />

        <Link to='/sign-up' className='registerLink'>
          Sign Up Instead
        </Link>
      </div>
    </>
  )
}

export default SignIn