'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import CustomButton from './CustomButton';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import { toast } from 'react-hot-toast';
import usePlayer from '@/hooks/usePlayer';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const player = usePlayer();
  const router = useRouter();
  const authModal = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    player.reset();
    router.refresh();

    if(error) {
      toast.error(error.message)
    } else {
      toast.success('Logged out')
    }
  };

  return (
    <div
      className={twMerge(`h-fit bg-gradient-to-b from-teal-500 p-6`, className)}
    >
      <div className='w-full mb-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>
          <button
            className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
            onClick={() => router.back()}
          >
            <RxCaretLeft className='text-white' size={30} />
          </button>
          <button
            className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
            onClick={() => router.forward()}
          >
            <RxCaretRight className='text-white' size={30} />
          </button>
        </div>
        <div className='flex md:hidden gap-x-2 items-center'>
          <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
            <HiHome size={20} className='text-black'/>
          </button>
          <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
            <BiSearch size={20} className='text-black'/>
          </button>
        </div>
        <div className='flex justify-between items-center gap-x-4'>
          {user ? 
          <div className='flex gap-x-4 items-center'>
            <CustomButton
              onClick={handleLogout}
              className='bg-white px-6 py-2'
            >
              Logout
            </CustomButton>
            <CustomButton onClick={() => router.push('/account')} className='bg-white'>
              <FaUserAlt />
            </CustomButton>
          </div> : (

          <>
          <div>
            <CustomButton onClick={authModal.onOpen} className='bg-transparent text-neutral-100 font-medium'>
              Sign up
            </CustomButton>
          </div>
          <div>
            <CustomButton onClick={authModal.onOpen} className='bg-white px-4 py-1'>
              Log in
            </CustomButton>
          </div>
          </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
