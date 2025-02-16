import { motion } from "framer-motion";
import { X } from "@phosphor-icons/react";
import { useEffect } from "react";
import Dropdown from "../../../functional/Dropdown/Dropdown";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostData, postSchema } from "./Schema";
import ErrorMessage from "../../../ui/Errors/ErrorMessage";
import TextArea from "../../../functional/Text/TextArea";
import AnimatedText from "../../../functional/Text/AnimatedText";

interface CreatePostModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const communityOptions = [
    { value: "1", label: "Community 1" },
    { value: "2", label: "Community 2" },
    { value: "3", label: "Community 3" },
];

const CreatePostModal: React.FC<CreatePostModalProps> = ({ isOpen, onClose }) => {

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<PostData>({
        resolver: zodResolver(postSchema),
    });

    const closeModal = () => {
        onClose();
        reset();
    }

    const onSubmit: SubmitHandler<PostData> = (data: PostData) => {
        console.log("Submitted post: ", data);
        reset();
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [closeModal]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
                className="absolute inset-0 bg-transparent backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
            />

            <motion.div
                className="relative w-full max-w-2xl bg-primary p-6 rounded-lg shadow-lg z-50"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
            >

                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <h2 className="text-lg font-semibold text-neutral-100">Create Post</h2>
                    <div
                        className="cursor-pointer h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors duration-200"
                        onClick={closeModal}
                    >
                        <X size={24} color="white" className="text-neutral-400 hover:text-neutral-200" />
                    </div>

                </div>

                <form className="space-y-5 mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Dropdown
                            name="community"
                            placeholder="Select a community"
                            options={communityOptions}
                            required
                            register={register}
                            control={control}
                            selectClassName="w-52 focus-within:w-64 transition-all duration-300"
                        />
                        {errors.community && (
                            <ErrorMessage error={errors.community} />
                        )}
                    </div>

                    <div>
                        <AnimatedText
                            name="title"
                            placeholder="Title"
                            register={register}
                            required
                        />
                        {errors.title && (
                            <ErrorMessage error={errors.title} />
                        )}
                    </div>

                    <div>
                        <TextArea
                            name="content"
                            register={register}
                            placeholder="What's on your mind?"
                            required
                            rows={5}
                        />
                        {errors.content && (
                            <ErrorMessage error={errors.content} />
                        )}
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            className="bg-primary text-white px-4 py-2 rounded-md"
                            type="submit"
                        >Post</button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default CreatePostModal;