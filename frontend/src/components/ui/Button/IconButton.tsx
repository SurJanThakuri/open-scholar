interface IconButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    count?: number;
    title?: string;
}

const IconButton = ({
    icon,
    onClick,
    count,
    title
}: IconButtonProps) => {
    return (
        <div
            className="flex items-center gap-1 rounded-[20px] bg-gray-700 hover:bg-gray-500 py-1 px-2 transition-colors duration-200 text-sm/5 text-neutral-400 hover:text-white cursor-pointer"
            onClick={onClick}
        >
            {icon}
            {count && <span className="text-sm">{count}</span>}
            {title && <span className="text-sm">{title}</span>}
        </div>
    );
}

export default IconButton
