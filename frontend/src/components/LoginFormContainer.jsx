// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// // import axios from 'axios';
// import { loginUser } from '../redux/actions/user.action';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//       // Call the loginUser action and pass email and password as parameters
//       dispatch(loginUser(email, password))
//         .then(() => {
//           // Redirect to the profile page after successful login
//           navigate('/profile');
//         })
//         .catch((error) => {
//           // Handle login failure
//           console.error('Error logging in:', error);
//           alert('Invalid username or password.');
//         });
//     };
  


//     // // Make an Axios request to the login endpoint
//     // axios
//     //   .post('http://localhost:3001/api/v1/user/login', {
//     //     email,
//     //     password,
//     //   })
//     //   .then((response) => {
//     //     console.log(response.data.body);

//     //     if (response.data.body.token) {
//     //       // Dispatch a success action with user details
//     //       const { firstName, lastName, email, id } = response.data.body;
//     //       dispatch(loginSuccess(email, firstName, lastName, id));

//     //       // Call the getUserDetails function to get the user's details from the database
//     //       dispatch(getUserDetails(response.data.body.token)).then(() => {
//     //         // Redirect to the profile page
//     //         navigate('/profile');
//     //       });
//     //     } else {
//     //       alert('Invalid username or password.');
//     //     }
//     //   })
//     //   .catch((error) => {
//     //     // Dispatch a failure action
//     //     dispatch(loginFailure(error.response.data));
//     //   });
  

//   // Accédez aux informations de l'utilisateur depuis le state avec useSelector
//   // const { isLoggedIn, firstName, lastName, id } = useSelector(state => state.user);
//   // console.log(isLoggedIn, firstName, lastName, id);

//   return (
//     <main className="main bg-dark">
//       <section className="sign-in-content">
//         <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
//         <h1>Sign In</h1>

//         <form onSubmit={handleSubmit}>
//           <div className="input-wrapper">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="input-wrapper">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="input-remember">
//             <input type="checkbox" id="remember-me" />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           <button className="sign-in-button" type="submit">
//             Sign In
//           </button>
//         </form>
//       </section>
//     </main>
//   );
// };

// export default LoginForm;