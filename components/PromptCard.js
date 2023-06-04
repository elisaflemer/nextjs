"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"
import { set } from "mongoose"

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

    const [copied, setCopied] = useState('')
    const { data: session } = useSession();

    const handleCopy = () => {
        setCopied(post.prompt)
        navigator.clipboard.writeText(post.prompt)
        setTimeout(() => setCopied(''), 3000)
    }

  return (
    <div className="prompt_card">
        <div className="flex justify-between items-start gap-5">
            <div>
                <Image src={post.creator.image} alt="Profile" width={40} height={40} className="rounded-full"/>
                <div className="flex flex-col">
                    <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
                    <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
                </div>
            </div>
            <div className="copy_btn" onClick={handleCopy}>
                <Image src={copied === post.prompt ? './assets/icons/tick.svg' : './assets/icons/copy.svg'} alt="Copy" width={12} height={12}/>
            </div>
        </div>
        <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
        <p className="font-inter text-sm blue_gradient cursor-pointer" onClick={() => handleTagClick && handleTagClick(post.tag)}>{post.tag}</p>

        {session?.user?.id === post.creator._id && (
            <div>
                <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleEdit}>Edit</p>
                <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleDelete}>Delete</p>
            </div>
            )
            }
    </div>
  )
}

export default PromptCard