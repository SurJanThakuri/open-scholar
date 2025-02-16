import { PlusCircle } from "@phosphor-icons/react";
import SortDropdown from "../../../components/functional/Dropdown/SortDropdown";
import Post from "../../../components/ui/Post/Post";
import CreatePostModal from "../../../components/derived/Modal/Post/CreatePostModal";
import { useState } from "react";

const posts = [
    {
        collegeLogo: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Funiglobe.edu.np%2F",
        category: "Academics",
        date: "Yesterday",
        collegeName: "Uniglobe",
        username: "Cursad37",
        title: "How to get started with React",
        content: "React is a great framework for building UI. Start with components, state, and props...",
        likes: 15,
        comments: 8,
    },
    {
        collegeLogo: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fku.edu.np%2F",
        category: "Internships & Jobs",
        date: "2 days ago",
        collegeName: "Kathmandu University",
        username: "DevIntern",
        title: "Best sites for finding tech internships?",
        content: "Where do you guys find internships for software engineering?",
        likes: 22,
        comments: 12,
    },
    {
        collegeLogo: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fpulchowkcampus.edu.np%2F",
        category: "Campus Life",
        date: "3 days ago",
        collegeName: "Pulchowk Campus",
        username: "HostelGuy",
        title: "Hostel food review!",
        content: "Is it just me, or does the hostel food keep getting worse? 🤢",
        likes: 30,
        comments: 18,
    },
    {
        collegeLogo: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fiost.tu.edu.np%2F",
        category: "Professors & Courses",
        date: "4 days ago",
        collegeName: "Tribhuvan University",
        username: "MathWhiz",
        title: "Hardest professor in TU?",
        content: "Who do you think is the most difficult professor at TU?",
        likes: 40,
        comments: 25,
    },
    {
        collegeLogo: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fku.edu.np%2F",
        category: "Confessions & Rants",
        date: "5 days ago",
        collegeName: "Kathmandu University",
        username: "Anon123",
        title: "Failed my midterm, what now?",
        content: "First time failing a major exam. Any advice on how to recover?",
        likes: 50,
        comments: 30,
    },
    {
        collegeLogo: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Funiglobe.edu.np%2F",
        category: "Scholarships & Grants",
        date: "6 days ago",
        collegeName: "Uniglobe",
        username: "ScholarSeeker",
        title: "Any fully funded scholarships for CS students?",
        content: "Looking for scholarships that cover full tuition in Nepal or abroad.",
        likes: 12,
        comments: 6,
    },
    {
        collegeLogo: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fiost.tu.edu.np%2F",
        category: "Mental Health & Stress",
        date: "1 week ago",
        collegeName: "Tribhuvan University",
        username: "StressedOut",
        title: "Dealing with exam anxiety",
        content: "How do you guys handle stress during exams? Any tips?",
        likes: 35,
        comments: 15,
    },
    {
        collegeLogo: "https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2Fpulchowkcampus.edu.np%2F",
        category: "Relationships & Friendships",
        date: "1 week ago",
        collegeName: "Pulchowk Campus",
        username: "LonelySoul",
        title: "How to make friends in college?",
        content: "I struggle with social anxiety. Any advice on making friends?",
        likes: 28,
        comments: 10,
    }
];

const Feed = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="w-[50%] space-y-1">
            <div 
            onClick={() => setIsModalOpen(true)}
            className="flex py-4 px-6 bg-primary-light rounded-lg gap-x-4">
                <PlusCircle size={26} className="text-danger" />
                <p className="w-full text-neutral-400 font-medium">Start a post...</p>
            </div>

            <div className="flex gap-1.5 justify-center items-center px-0.5">
                <div className="w-full h-[1px] bg-primary-light my-4" />
                <SortDropdown />
            </div>

            <div className="space-y-2 md:space-y-4">
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>
             <CreatePostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Feed;