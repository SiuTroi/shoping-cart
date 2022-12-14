import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';

const UserPage = () => {
  const { users } = useSelector(state => state.UserReducer)
  const user = useSelector(state => state.UserReducer)
  const dispatch = useDispatch()


  return (
    <div className='max-w-md mx-auto mt-24'>
      <div>
        {users && users.find(item => item?.userid === user?.userid) ? (
          <div className='px-16 pt-16 pb-32  mt-12 mx-4 bg-white rounded-2xl shadow-lg'>
            <div  className='flex items-center gap-4'>
              <div className='w-[50px] h-[50px] flex justify-center items-center rounded-full 
              border border-solid border-blue-500'>
                <AiOutlineUser className='text-[32px] text-blue-500' />
              </div>
              <div>
                <h3 className='font-semibold text-lg'>{user.username}</h3>
                <p className='font-light text-[14px]'>{user.email}</p>
              </div>
            </div>
            <div className='mt-12'>
              <Link to={"/user/historycheckout"}><b>-</b> <span className="underline">History checkout</span> </Link>
            </div>
            <div className='mt-12'>
              <button className='w-full bg-blue-500 text-white rounded-2xl py-2' 
              onClick={() => dispatch({type: "USER_LOGOUT"})}>
                Log out
              </button>
            </div>
          </div>
        ) : (
          <div className='px-16 pt-16 pb-32 text-center mt-12 mx-4 bg-white rounded-2xl shadow-lg'>
            <div>
              <h2 className='text-2xl text-blue-500 font-bold text-center'>Beauty.bd</h2>
              <h6 className='text-lg font-medium mb-10'>Sign in to check your order.</h6>
              <Link to={"/login"}>
                <button  className='w-full bg-blue-500 py-2 rounded-2xl hover:bg-blue-600 text-white'>
                  Login
                </button>
              </Link>
              <p className='my-2'>or</p>
              <Link to={"/signup"}>
                <button className='w-full bg-transparent text-blue-500 border border-solid border-blue-500 hover:bg-blue-600 hover:text-white py-2 rounded-2xl'>
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserPage