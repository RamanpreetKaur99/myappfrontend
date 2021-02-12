import React,{ useState, useEffect } from 'react' 
import {Card} from 'react-bootstrap'
import {Form,Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {register} from '../../store/actions/auth'
import {Redirect} from 'react-router-dom'

const SignupForm = ({ register, auth }) => {

    const [values, setValues] = useState({
        username: null,
        email:null,
        name:null, 
        password1: null,
        password2:null,
        family: 1
    })

    const { name, username, family, email, password1, password2 } = values;

    if (auth === true) {
        return <Redirect to='/' />;
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        if (password1 !== password2) {
         alert('Passwords do not match')
        } else {
        register({ name, password1, email, password2, username, family });
        }

    }

    return(
        <div className='container-fluid'>
            <div className = 'row justify-content-center m-5'>
                <div className='row'>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" name='name' onChange={(e) => handleChange(e)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e) => handleChange(e)}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name='username' onChange={(e) => handleChange(e)}/>
                        <Form.Text className="text-muted">
                        Username must not contain any spaces
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password1" placeholder="Password" name='password1' onChange={(e) => handleChange(e)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password2" placeholder="Password" name="password2" onChange={(e) => handleChange(e)}/>
                    </Form.Group>
                </Form>
                </div>
               <br />
               <div className='col-12'>
                   <Button style={{marginLeft:'45%'}} variant="primary" type="submit" onClick = {(e) => handleSubmit(e)}>
                    Submit
                    </Button>
               </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth.isAuthenticated,
  });

export default connect(mapStateToProps, {register})(SignupForm)
