import React from 'react'
import './../Login/Login.css'
const Login = () => {
    return (
        <div className='Loginbody'>
            <div className='absolute top-5 left-10 sm:top-10 sm:left-20'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M5.6875 12.1875H21.9375C22.153 12.1875 22.3597 12.2731 22.512 12.4255C22.6644 12.5778 22.75 12.7845 22.75 13C22.75 13.2155 22.6644 13.4222 22.512 13.5745C22.3597 13.7269 22.153 13.8125 21.9375 13.8125H5.6875C5.47201 13.8125 5.26535 13.7269 5.11298 13.5745C4.9606 13.4222 4.875 13.2155 4.875 13C4.875 12.7845 4.9606 12.5778 5.11298 12.4255C5.26535 12.2731 5.47201 12.1875 5.6875 12.1875Z" fill="white" />
                    <path d="M6.02386 13L12.7627 19.7372C12.9153 19.8898 13.001 20.0967 13.001 20.3125C13.001 20.5282 12.9153 20.7352 12.7627 20.8877C12.6102 21.0403 12.4032 21.126 12.1875 21.126C11.9717 21.126 11.7648 21.0403 11.6122 20.8877L4.29974 13.5752C4.22407 13.4998 4.16404 13.4101 4.12308 13.3114C4.08212 13.2127 4.06104 13.1069 4.06104 13C4.06104 12.8931 4.08212 12.7873 4.12308 12.6886C4.16404 12.5899 4.22407 12.5002 4.29974 12.4247L11.6122 5.11224C11.7648 4.95967 11.9717 4.87396 12.1875 4.87396C12.4032 4.87396 12.6102 4.95967 12.7627 5.11224C12.9153 5.2648 13.001 5.47173 13.001 5.68749C13.001 5.90325 12.9153 6.11017 12.7627 6.26274L6.02386 13Z" fill="white" />
                </svg>
            </div>
            <div className='flex flex-col justify-center w-auto items-center min-h-screen'>
                <div className='w-2/5'>
                    <div className='text-[#FFFFFF]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="125" height="68" viewBox="0 0 95 48" fill="none">
                            <path d="M94.4595 36.0001H89.3657V23.7552C89.3657 22.7756 89.1697 21.845 88.7779 20.9634C88.4187 20.0817 87.9126 19.3307 87.2595 18.7103C86.6065 18.0573 85.8391 17.5511 84.9575 17.1919C84.1085 16.8001 83.1942 16.6042 82.2146 16.6042C81.235 16.6042 80.3044 16.8001 79.4228 17.1919C78.5738 17.5511 77.8228 18.0573 77.1697 18.7103C76.5167 19.3307 75.9942 20.0817 75.6024 20.9634C75.2432 21.845 75.0636 22.7756 75.0636 23.7552V36.0001H69.9697V23.7552C69.9371 22.0899 70.231 20.5226 70.8514 19.0532C71.5044 17.5511 72.3861 16.245 73.4963 15.1348C74.6065 14.0246 75.9126 13.143 77.4146 12.4899C78.9167 11.8368 80.5167 11.5103 82.2146 11.5103C83.9126 11.5103 85.5126 11.8368 87.0146 12.4899C88.5167 13.143 89.8228 14.0246 90.933 15.1348C92.0432 16.245 92.9085 17.5511 93.5289 19.0532C94.182 20.5226 94.4922 22.0899 94.4595 23.7552V36.0001Z" fill="white" />
                            <path d="M66.8286 36.0001H61.7837V11.5103H66.8286V36.0001ZM66.8286 6.36747H61.7837V5.28992L66.8286 0.196045V6.36747Z" fill="white" />
                            <path d="M58.1094 18.9062C58.4033 19.6572 58.6318 20.4409 58.7951 21.2572C58.9584 22.0736 59.04 22.9062 59.04 23.7552V38.8899C59.04 40.6858 58.6808 42.3511 57.9625 43.8858C57.2767 45.4532 56.3298 46.8083 55.1216 47.9511L51.3502 44.4736C52.1665 43.7878 52.8196 42.9552 53.3094 41.9756C53.7992 41.0287 54.0278 40.0001 53.9951 38.8899L53.9461 23.6572C53.9461 22.7429 53.7502 21.8123 53.3584 20.8654C53.2931 20.6695 53.2114 20.4899 53.1135 20.3266C53.0155 20.1307 52.9012 19.9185 52.7706 19.6899C52.1176 18.7103 51.2522 17.9429 50.1747 17.3878C49.1298 16.8001 47.9706 16.5062 46.6971 16.5062C45.7176 16.5062 44.8033 16.7021 43.9543 17.094C43.1053 17.4531 42.3543 17.9593 41.7012 18.6123C41.0482 19.2654 40.5257 20.0327 40.1339 20.9144C39.7747 21.7633 39.5951 22.6776 39.5951 23.6572C39.5951 24.6368 39.7747 25.5674 40.1339 26.4491C40.5257 27.3307 41.0482 28.098 41.7012 28.7511C42.3543 29.4042 43.1053 29.9266 43.9543 30.3185C44.8033 30.6776 45.7176 30.8572 46.6971 30.8572C47.0563 30.8572 47.3829 30.8572 47.6767 30.8572C47.9706 30.8246 48.2645 30.7593 48.5584 30.6613L49.7339 35.5593C49.2767 35.7225 48.7869 35.8368 48.2645 35.9021C47.7747 35.9674 47.2522 36.0001 46.6971 36.0001C45.1624 36.0001 43.6931 35.7225 42.289 35.1674C40.9175 34.6123 39.6767 33.845 38.5665 32.8654C37.489 31.8858 36.591 30.7429 35.8727 29.4368C35.1869 28.098 34.7624 26.6613 34.5992 25.1266C34.5339 24.8327 34.5012 24.5715 34.5012 24.3429C34.5012 24.1144 34.5012 23.8858 34.5012 23.6572C34.5012 21.9593 34.8114 20.3756 35.4318 18.9062C36.0849 17.4368 36.9665 16.147 38.0767 15.0368C39.1869 13.9266 40.4767 13.0613 41.9461 12.4409C43.4482 11.7878 45.0318 11.4613 46.6971 11.4613C47.9706 11.4613 49.1951 11.6409 50.3706 12.0001C51.5461 12.3593 52.6237 12.8817 53.6033 13.5674C54.6155 14.2205 55.4971 15.0042 56.2482 15.9184C57.0318 16.8327 57.6522 17.8287 58.1094 18.9062Z" fill="white" />
                            <path d="M20.6461 11.5103C22.3114 11.5103 23.8788 11.8368 25.3482 12.4899C26.8502 13.1103 28.1563 13.9756 29.2665 15.0858C30.3767 16.196 31.2584 17.5022 31.9114 19.0042C32.5645 20.4736 32.891 22.0573 32.891 23.7552C32.891 25.4532 32.5645 27.0532 31.9114 28.5552C31.2584 30.0246 30.3767 31.3144 29.2665 32.4246C28.1563 33.5022 26.8502 34.3675 25.3482 35.0205C23.8788 35.6409 22.3114 35.9511 20.6461 35.9511C18.9482 35.9511 17.3482 35.6409 15.8461 35.0205C14.3767 34.3675 13.0869 33.5022 11.9767 32.4246C10.8992 31.3144 10.0339 30.0246 9.38081 28.5552C8.7604 27.0532 8.4502 25.4532 8.4502 23.7552C8.4502 22.0573 8.7604 20.4736 9.38081 19.0042C10.0339 17.5022 10.8992 16.196 11.9767 15.0858C13.0869 13.9756 14.3767 13.1103 15.8461 12.4899C17.3482 11.8368 18.9482 11.5103 20.6461 11.5103ZM20.6461 30.8573C21.6257 30.8573 22.5563 30.6777 23.438 30.3185C24.3196 29.9266 25.0706 29.4205 25.691 28.8001C26.3441 28.1471 26.8502 27.396 27.2094 26.5471C27.6012 25.6654 27.7971 24.7348 27.7971 23.7552C27.7971 22.7756 27.6012 21.845 27.2094 20.9634C26.8502 20.0817 26.3441 19.3307 25.691 18.7103C25.0706 18.0573 24.3196 17.5511 23.438 17.1919C22.5563 16.8001 21.6257 16.6042 20.6461 16.6042C19.6665 16.6042 18.7359 16.8001 17.8543 17.1919C16.9726 17.5511 16.2053 18.0573 15.5522 18.7103C14.8992 19.3307 14.3767 20.0817 13.9849 20.9634C13.6257 21.845 13.4461 22.7756 13.4461 23.7552C13.4461 24.7348 13.6257 25.6654 13.9849 26.5471C14.3767 27.396 14.8992 28.1471 15.5522 28.8001C16.2053 29.4205 16.9726 29.9266 17.8543 30.3185C18.7359 30.6777 19.6665 30.8573 20.6461 30.8573Z" fill="white" />
                            <path d="M0.469238 5.14295L5.56312 0.0490723V36.0001H0.469238V5.14295Z" fill="white" />
                        </svg>
                    </div>
                    <div className='logincard flex flex-col justify-around  pt-6 '>

                        <input className="p-2 bg-[#0286D0] text-[#FFF] outline-none placeholder-white text-sm sm:text-base " type='text' placeholder="Username" name='em-username' /><br></br>
                        <input className="p-2 bg-[#0286D0] text-[#FFF]  outline-none placeholder-white text-sm sm:text-base" type='password' placeholder='Password' name='password' />
                        <button className='w-auto text-[#0286D0] rounded bg-[#FFF] p-2 mt-4'>Login</button>
                        <a className='underline mt-5 text-[#FFF] text-center underline-offset-4 text-sm sm:text-base'>Forget password</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login