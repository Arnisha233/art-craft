import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])
  const handleToggle = (e) => {
      if(e.target.checked){
        setTheme('synthwave')
      }else{
        setTheme('light')
      }
  }
  console.log(theme)
    const { user, logOut } = useContext(AuthContext)
    return (
      <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
        <div className='flex-1'>
          <Link to='/' className='flex gap-2 items-center'>
            <img className='w-auto h-7' src='' alt='' />
            <span className='font-bold'>Art Craft Store</span>
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
          <label className="cursor-pointer grid place-items-center">
  <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/all-art-craft-items'>All Art & Craft Items</Link>
              </li>
  
            {!user && (
                <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
          </ul>
  
          {user && (
            <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full' title={user?.displayName}>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/addCraftItem' className='justify-between'>Add Craft Item</Link>
              </li>
              {/* <li>
                <div>All Art & Craft Items</div>
              </li> */}
              <li>
                <Link to='/my-art-craft-list'>My Art&Craft List</Link>
              </li>
              {/* <li>
                <div>Bid Requests</div>
              </li> */}
              <li className='mt-2'>
                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>
          )}
        </div>
      </div>
    )
  }
  
  export default Navbar