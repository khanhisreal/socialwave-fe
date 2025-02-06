function Icon({ name, size = 24 }) {
    const icons = {
        home: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={size}
                height={size}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l9-9m0 0l9 9m-9-9v18"
                />
            </svg>
        ),
        user: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={size}
                height={size}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 19.121A9 9 0 1119.12 5.12M12 14.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm7.5 6.75a7.5 7.5 0 00-15 0"
                />
            </svg>
        ),
        settings: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={size}
                height={size}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15.75A3.75 3.75 0 1012 8.25a3.75 3.75 0 000 7.5zM19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
            </svg>
        ),
        menu: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={size}
                height={size}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                />
            </svg>
        ),
    };

    return icons[name] || null;
}

export default Icon;
