import type { SVGProps } from 'react'

export const Linear = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}>
        <path
            fill="#5E6AD2"
            d="M2.5 18.5L5.5 15.5L9.5 19.5L6.5 22.5C5.5 23.5 4 23.5 3 22.5L1.5 21C0.5 20 0.5 18.5 1.5 17.5L2.5 18.5ZM12 12L19 5L24 10L17 17L12 12ZM10 14L14 18L7 21C6.5 21.2 6 21 5.5 20.5L3.5 18.5C3 18 2.8 17.5 3 17L6 10L10 14ZM8.5 3.5L11 1C11.5 0.5 12.5 0.5 13 1L15 3C15.5 3.5 15.5 4.5 15 5L12.5 7.5L8.5 3.5Z"
        />
    </svg>
)

export default Linear

