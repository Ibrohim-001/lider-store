import { SVGProps } from "react";

export function LineMdSearch(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="40" strokeDashoffset="40" d="M10.76 13.24c-2.34 -2.34 -2.34 -6.14 0 -8.49c2.34 -2.34 6.14 -2.34 8.49 0c2.34 2.34 2.34 6.14 0 8.49c-2.34 2.34 -6.14 2.34 -8.49 0Z"><animate fill="freeze" attributeName="strokeDashoffset" dur="0.5s" values="40;0"></animate></path><path strokeDasharray="12" strokeDashoffset="12" d="M10.5 13.5l-7.5 7.5"><animate fill="freeze" attributeName="strokeDashoffset" begin="0.5s" dur="0.2s" values="12;0"></animate></path></g></svg>
    )
}

export default LineMdSearch