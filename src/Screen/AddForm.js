import React, { } from 'react'
import { Formik, useFormik } from 'formik';
import './Main.css'
import { sendingUser } from '../redux/ReducerComponents/User/Action'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

function AddForm({ sendingUser }) {

    return (
        <div className="formContainer">
            <Link to="/" className="BackButton formBackButton" >
                <p>Back</p>
            </Link>
            <div className="innerFormContainer">
                <h1>Anywhere in your app!</h1>
                <Formik
                    initialValues={{ email: '', name: '', username: '', address: '', phone: '', zipcode: '' }}
                    validate={values => {
                        const errors = {};
                        var num = /^\d{6}/
                        var regx = /^[6-9]\d{9}$/;
                        if (!values.email) {
                            errors.email = 'Required Email';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.name) {
                            errors.name = "Required Name";
                        }
                        if (!values.username) {
                            errors.username = "Required Username"
                        }
                        if (!values.address) {
                            errors.address = "Required address"
                        }
                        if (!values.phone) {
                            errors.phone = "Required phone"
                        }
                        else if (!regx.test(values.phone)) {

                            errors.phone = "Check your number"
                        }
                        if (!values.zipcode) {
                            errors.zipcode = "Required zipcode"
                        }
                        else if (!num.test(values.zipcode)) {

                            errors.zipcode = "Check your Zipcode"
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }, event) => {
                        // event.preventDefault()
                        values.id = Math.floor(Math.random() * 100)
                        sendingUser(values)
                        resetForm()
                        setSubmitting(false)
                        alert("Successfully Saved")
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="topInputs">

                                <div className="nameInput">
                                    <p>Name</p>
                                    <input
                                        type="name"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                    <h6>{errors.name && touched.name && errors.name}</h6>
                                </div>
                                <div className="emailInput">
                                    <p>Email</p>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <h6>{errors.email && touched.email && errors.email}</h6>
                                </div>
                            </div>

                            <div className="topInputs">

                                <div className="nameInput">
                                    <p>Username</p>
                                    <input
                                        type="username"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                    <h6>{errors.username && touched.username && errors.username}</h6>
                                </div>
                                <div className="emailInput">
                                    <p>Address</p>
                                    <input
                                        type="address"
                                        name="address"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                    />
                                    <h6>{errors.address && touched.address && errors.address}</h6>
                                </div>
                            </div>


                            <div className="topInputs">

                                <div className="nameInput">
                                    <p>Phone</p>
                                    <input
                                        type="phone"
                                        name="phone"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                    />
                                    <h6>{errors.phone && touched.phone && errors.phone}</h6>
                                </div>
                                <div className="emailInput">
                                    <p>Zip Code</p>
                                    <input
                                        type="zipcode"
                                        name="zipcode"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.zipcode}
                                    />
                                    <h6>{errors.zipcode && touched.zipcode && errors.zipcode}</h6>
                                </div>
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sendingUser: (user) => dispatch(sendingUser(user))
    }
}

export default connect(null, mapDispatchToProps)(AddForm)
