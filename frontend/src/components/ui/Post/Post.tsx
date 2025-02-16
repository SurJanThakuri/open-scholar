import { Chat, Dot, DotsThree, Heart, UploadSimple } from "@phosphor-icons/react"
import IconButton from "../Button/IconButton"
import React from "react";

interface PostProps {
  title: string;
  content: string;
  collegeLogo: string;
  category: string;
  date: string;
  username: string;
  collegeName: string;
  likes: number;
  comments: number;
}

const Post: React.FC<PostProps> = ({
  title,
  content,
  collegeLogo,
  category,
  date,
  username,
  collegeName,
  likes,
  comments
}) => {
  return (
    <div className="bg-primary p-4 rounded-lg space-y-4 border border-neutral-600 hover:shadow-md shadow-neutral-600 transition-shadow duration-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-1">
          <img className="h-10 w-10 rounded-full border border-primary-dark object-contain"
            src={collegeLogo} alt="logo" />
          <div className="">
            <div className="flex items-center">
              <p className="text-text-primary text-sm font-semibold">{category} </p>
              <Dot size={18} weight="bold" className="text-text-light" />
              <span className="text-xs ">{date}</span>
            </div>
            <div className="flex items-center">
              <p className="text-text-primary text-xs">{collegeName} </p>
              <Dot size={18} weight="bold" className="text-text-light" />
              <span className="text-xs ">{username}</span>
            </div>
          </div>
        </div>
        <div className="bg-transparent p-2 rounded-full cursor-pointer hover:bg-gray-600 transition-colors duration-300 flex justify-center items-center">
          <DotsThree size={24} weight="bold" />
        </div>
      </div>

      <div>
        <h1 className="text-lg line-clamp-1 cursor-pointer font-semibold">{title}</h1>
        <p className="cursor-pointer line-clamp-1 whitespace-pre-wrap break-words text-sm/5 [word-break:break-word] md:line-clamp-3">
          {content}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex  gap-2 md:gap-4 items-center">
          <IconButton
            icon={<Heart size={18} />}
            count={likes}
            onClick={() => console.log("Liked")}
          />
          <IconButton
            icon={<Chat size={18} />}
            count={comments}
            onClick={() => console.log("comment")}
          />
        </div>
        <IconButton
            icon={<UploadSimple size={18} />}
            title="Share"
            onClick={() => console.log("Share")}
          />
      </div>
    </div>
  )
}

export default Post
