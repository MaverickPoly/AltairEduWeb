export default function Button({children, oncClick}) {
    return (
        <button
            onClick={oncClick}
            className="relative inline-block px-6 py-2 font-bold text-white bg-primary rounded-md overflow-hidden group ">
            <span
                className="absolute inset-0 w-full h-full bg-accent transform translate-y-full transition-transform duration-500 group-hover:translate-y-0"></span>

            <span className="relative z-10">{children}</span>
        </button>
    )
}