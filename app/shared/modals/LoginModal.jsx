import React, {useEffect, useState} from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useModalStore from "@/app/shared/stores/useModalStore";

function LoginModal() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {isSignInOpen, closeSignInModal} = useModalStore();

    const onSubmit = async (data) => {
        console.log(data)
    }

    useEffect(() => {
        console.log(isSignInOpen)
    }, [isSignInOpen]);

    return (
        <>
            <Modal show={isSignInOpen} onHide={closeSignInModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome Back</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <input type="email" className="form-control" placeholder="Email/Phone Number" {...register("email", { required: true })} />
                            {errors.email && <div className="alert alert-danger" role="alert">Email is required</div>}
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="Password" {...register("password", { required: true })} />
                            {errors.password && <div className="alert alert-danger" role="alert">Password is required</div>}
                        </div>
                        <div className="mb-4">
                            <a className="forget-pass" href="#">Forget Password?</a>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">


                                Log In
                            </button>
                        </div>
                        <div className="d-flex justify-content-center text-center">
                            <span className="create-account">Don’t Have an Account? <a href="">Create Now</a></span>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
            {/*{login && <Login_TwoStepModal handleClose={handleClose} />}*/}
        </>
    );
}

export default LoginModal;
