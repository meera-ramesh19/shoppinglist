import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Layout.css';
import homeIcon from '../../src/images/HomeIcon.png';
import listIcon from '../../src/images/ListIcon.png';
import addItemIcon from '../../src/images/AddItemIcon.png';
import loginIcon from '../../src/images/login.jpg';
import signupIcon from '../../src/images/signup.png';
import profileIcon from '../../src/images/profile.jpg';
import { getAuth } from 'firebase/auth'
/**
 * TODO: The links defined in this file don't work!
 *
 * Instead of anchor element, they should use a component
 * from `react-router-dom` to navigate to the routes
 * defined in `App.jsx`.
 */

export function Layout() {
	const [user, setUser] = useState(null);
	const auth=getAuth();
	// Add a listener to Firebase Authentication to track user status
	 useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
		  if (authUser) {
			// User is signed in
			setUser(authUser);
		  } else {
			// User is signed out
			setUser(null);
		  }
		});
	
		return () => {
		  // Clean up the listener when the component unmounts
		  unsubscribe();
		};
	  }, []);
	
	  const handleSignOut = () => {
		// Sign out the user using Firebase Authentication
		auth.signOut();
	  };
	return (
		<>
			<div className="Layout">
				<header className="Layout-header">
					{/* <h1>Smart shopping list</h1> */}
					<nav className="Nav">
					{/* {user ? (
						<> */}
						<NavLink to="/" className="Nav-link">
							<img alt="home navigation icon" src={homeIcon} />
						</NavLink>
						<NavLink to="/list" className="Nav-link">
							<img alt="list navigation icon" src={listIcon} />
						</NavLink>
						<NavLink to="/add-item" className="Nav-link">
							<img alt="add item navigation icon" src={addItemIcon} />
						</NavLink>
						{/* <NavLink to="/profile" className="Nav-link">
						<img alt="add item navigation icon" src={profileIcon}style={{borderRadius:'5px',width:'28px',height:'28px'}} />
					     </NavLink> */}
					{/* </>
					):(
						<>
						<NavLink to="/sign-in" className="Nav-link">
							<img alt="login navigation icon"  src={loginIcon} style={{borderRadius:'5px', width:'28px',height:'28px'}}/>
						</NavLink>
						<NavLink to="/sign-up" className="Nav-link">
							<img alt="add item navigation icon" src={signupIcon}style={{borderRadius:'5px'}} />
						</NavLink>
						 </>
					)}
						 */}
					</nav>
				</header>
				<main className="Layout-main">
					<Outlet />
				</main>
				<footer>
					<p>
						© {new Date().getFullYear()} Developed by the Collab Lab TCL-48 Team
					</p>
				</footer>
			</div>
		</>
	);
}
