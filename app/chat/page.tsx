import React from 'react'
import ProtectedRoute from '../components/ProtectedRoute';

const ChatPage = () => {
  return (
    <ProtectedRoute>
    <div>
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-white px-6  py-4">Chat Page</h1>
    </div>
    </ProtectedRoute>
  )
}

export default ChatPage;