import type { SVGProps } from 'react'

export const Gmail = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        {...props}>
        <path
            fill="#EA4335"
            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        />
        <path
            fill="#C5221F"
            d="M0 5.457C0 3.434 2.309 2.28 3.927 3.493L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457H0z"
        />
        <path
            fill="#FBBC04"
            d="M18.545 11.73V21h3.819c.904 0 1.636-.732 1.636-1.636V11.73h-5.455z"
        />
        <path
            fill="#34A853"
            d="M1.636 21h3.819V11.73H0v7.636c0 .904.732 1.636 1.636 1.636z"
        />
    </svg>
)

export default Gmail

