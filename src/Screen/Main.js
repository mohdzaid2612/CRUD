import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchingData, fetchingUserDetails, editUser } from '../redux/ReducerComponents/User/Action'
import './Main.css'
import { Formik } from 'formik'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function Main({ userData, fetchingData, editUser }) {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [id, setId] = useState('')
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        const callData = () => {
            fetchingData()
        }
        callData()
    }, [])

    const [showUser, setShowuser] = useState(null)
    const readData = (id, user) => {
        // fetchingUserDetails(id)
        console.log(user)
        setShowuser(user)
    }

    const [visibleList, setVisiblelist] = useState({});

    const handleDelete = (id) => {
        if (visibleList[id] === undefined) {
            setVisiblelist({ ...visibleList, [id]: true })
        }
        else {
            // console.log("in else")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const raw = {
            id: id,
            name: name,
            email: email,
            username: username,
            phone: phone,
            address: {
                street: address,
                zipcode: zipcode
            }
        }
        editUser(raw)
        document.getElementById("myForm").reset();
        onCloseModal()
    }

    const editData = (user) => {
        setName(user?.name)
        setUsername(user?.username)
        setEmail(user?.email)
        setPhone(user?.phone)
        setAddress(`${user?.address?.street} ${user?.address?.city}`)
        setZipcode(user?.address?.zipcode)
        setId(user?.id)
        onOpenModal()
    }

    return (
        <>
            <div className="container">

                <div className="innerContainer">
                    <Link to="/add-user" className="addButton">
                        <p>Add Button</p>
                    </Link>

                    {
                        userData?.loading == true ? <h1>Loading...</h1> : userData?.error ? <h1>{userData?.error}</h1> :
                            (
                                showUser === null || showUser === undefined) ? (
                                    userData?.users?.concat(userData?.newData)?.reverse()?.map((user) => {
                                        if (visibleList[user?.id] === undefined)
                                            return (
                                                <div className="tableRow" key={user?.id}>
                                                    <div className="tableContent">
                                                        <p>{user?.name}</p>
                                                    </div>
                                                    <div className="tableActions">
                                                        <div className="readButton">
                                                            <p onClick={() => readData(user?.id, user)}>Read</p>
                                                        </div>
                                                        <div className="editButton">
                                                            <p onClick={() => editData(user)}>Edit</p>
                                                        </div>
                                                        <div className="deleteButton">
                                                            <p onClick={() => handleDelete(user?.id)}>Delete</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        else {
                                            return (
                                                <>
                                                </>
                                            )
                                        }
                                    })
                                ) :
                                (
                                    <div className="particularData">
                                        <div className="block">
                                            <div className="blockTitle">
                                                <p>Name</p>
                                            </div>
                                            <div className="blockDetail">
                                                <p>{showUser?.name}</p>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <div className="blockTitle">
                                                <p>Username</p>
                                            </div>
                                            <div className="blockDetail">
                                                <p>{showUser?.username}</p>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <div className="blockTitle">
                                                <p>Email</p>
                                            </div>
                                            <div className="blockDetail">
                                                <p>{showUser?.email}</p>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <div className="blockTitle">
                                                <p>Phone</p>
                                            </div>
                                            <div className="blockDetail">
                                                <p>{showUser?.phone}</p>
                                            </div>
                                        </div>
                                        <div className="block">
                                            <div className="blockTitle">
                                                <p>Address</p>
                                            </div>
                                            <div className="blockDetail">
                                                {
                                                    showUser?.address?.street ? <p>{showUser?.address?.street}</p> : <p>{showUser?.address}</p>
                                                }

                                            </div>
                                        </div>
                                        <div className="block">
                                            <div className="blockTitle">
                                                <p>Zip Code</p>
                                            </div>
                                            <div className="blockDetail">
                                                {
                                                    showUser?.address?.zipcode ? <p>{showUser?.address?.zipcode}</p> : <p>{showUser?.zipcode}</p>
                                                }

                                            </div>
                                        </div>


                                        <div className="BackButton">
                                            <p onClick={() => setShowuser(null)}>Back</p>
                                        </div>
                                    </div>

                                )

                    }


                </div>
            </div>

            <Modal closeOnOverlayClick={false} open={open} onClose={onCloseModal} classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
            }} center>
                <div className="formContainer">

                    <div className="innerFormContainer">
                        <h1>Anywhere in your app!</h1>
                        <form id="myForm" onSubmit={handleSubmit}>
                            <div className="topInputs">

                                <div className="nameInput">
                                    <p>Name</p>
                                    <input
                                        type="name"
                                        name="name"
                                        onChange={(e) => setName(e.target.value)}
                                        // onBlur={handleBlur}
                                        value={name}
                                    />

                                </div>
                                <div className="emailInput">
                                    <p>Email</p>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        // onBlur={handleBlur}
                                        value={email}
                                    />

                                </div>
                            </div>

                            <div className="topInputs">

                                <div className="nameInput">
                                    <p>Username</p>
                                    <input
                                        type="username"
                                        name="username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        // onBlur={handleBlur}
                                        value={username}
                                    />

                                </div>
                                <div className="emailInput">
                                    <p>Address</p>
                                    <input
                                        type="address"
                                        name="address"
                                        onChange={(e) => setAddress(e.target.value)}
                                        // onBlur={handleBlur}
                                        value={address}
                                    />

                                </div>
                            </div>


                            <div className="topInputs">

                                <div className="nameInput">
                                    <p>Phone</p>
                                    <input
                                        type="phone"
                                        name="phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                        // onBlur={handleBlur}
                                        value={phone}
                                    />

                                </div>
                                <div className="emailInput">
                                    <p>Zip Code</p>
                                    <input
                                        type="zipcode"
                                        name="zipcode"
                                        onChange={(e) => setZipcode(e.target.value)}
                                        // onBlur={handleBlur}
                                        value={zipcode}
                                    />

                                </div>
                            </div>
                            <button type="submit" >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    )
}


const mapStateToProps = state => {
    return {
        userData: state?.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchingData: () => dispatch(fetchingData()),
        editUser: (user) => dispatch(editUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
