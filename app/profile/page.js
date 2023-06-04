"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log(session?.user.id)
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      console.log(data)
      setPosts(data);
    }
    if (session?.user.id) fetchPosts()
  }, [])

  const handleEdit = async (post) => {
    router.push(`/update-prompt/${post._id}`)


  }
  const handleDelete = async () => {
    
  }

  return (
    <Profile
    name="My"
    desc="Welcome to your profile!"
    data={posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}/>
  )
}

export default MyProfile