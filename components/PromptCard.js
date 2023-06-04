"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useRouter, usePathname } from "next/navigation"

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

    const [copied, setCopied] = useState(false)
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
            <div className="copy_btn" onClick={() => {}}>
                <Image src={copied ? './assets/icons/tick.svg' : './assets/icons/copy.svg'} alt="Copy" width={12} height={12}/>
            </div>
        </div>
        <p>{post.prompt}</p>
        <p>{post.tag}</p>
    </div>
  )
}

export default PromptCard