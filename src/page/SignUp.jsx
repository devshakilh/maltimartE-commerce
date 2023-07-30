import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'
import { auth, db, storage } from '../firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';




const SignUp = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email,
                password);
            const user = userCredential.user;
            const storageRef = ref(storage, `images/${Date.now() + username}`)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on((error) => {
                toast.error(error.message)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

                    //   update user profile 
                    await updateProfile(user, {
                        displayName: username,
                        photoURL: downloadURL
                    });
                    // store user data in firestore database 
                    await setDoc(doc(db, 'users', user.uid), {
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL
                    });

                });
            })

            setLoading(false)
            toast.success('Account crated success')
            navigate('/login')
        } catch (error) {
            toast.error('Something went wrong')
            setLoading(false)
        }
    }


    return <Helmet title='SignUp'>
        <section>
            <Container>
                <Row>
                    {
                        loading ? <Col lg='12' className='text-center'>
                            <h5 className='fw-bold'>Loading....</h5></Col> : <Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold mb-4'>SignUp</h3>

                            <Form className='auth__form' onSubmit={signup}>
                                <FormGroup className='form__group'>
                                    <input type="username" placeholder='Username' value={username}
                                        onChange={e => setUserName(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="email" placeholder='Enter your email' value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="password" placeholder='Enter your password' value={password}
                                        onChange={e => setPassword(e.target.value)} />
                                </FormGroup>
                                <FormGroup className='form__group'>
                                    <input type="file" placeholder='Enter your password' value={''}
                                        onChange={e => setFile(e.target.files[0])} />
                                </FormGroup>
                                <button type='submit' className="buy__btn login__btn">Create an account</button>

                                <p>Already have an account?{''}
                                    <Link to='/login'> Login</Link></p>
                            </Form>
                        </Col>
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default SignUp;