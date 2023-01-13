import Link from 'next/link'

function NavBar(props) {
    const width = props.sideWidth
    const shadowColor = props.shadowColor
    const textColor = props.textColor
    return (
        <div className={`fixed overflow-y-auto text-${textColor} rounded-r-3xl my-40 h-full duration-300 bg-inherit `}
            style={{ width: width }}>
            <ul className='flex flex-col mx-5 text-2xl p-10 space-y-20 text-center font-semibold'>
                <Link href="/about">
                    <li className={`hover:border-2 p-4 hover:shadow-2xl hover:shadow-${shadowColor}`}>About Us</li>
                </Link>
                <Link href="/rooms">
                    <li className='hover:border-2 p-4 hover:shadow-2xl hover:shadow-slate-700'>Our Rooms</li>
                </Link>
                <Link href="/help">
                    <li className='hover:border-2 p-4 hover:shadow-2xl hover:shadow-slate-700'>Help</li>
                </Link>
                <Link href="/contact">
                    <li className='hover:border-2 p-4 hover:shadow-2xl hover:shadow-slate-700'>Contact</li>
                </Link>

            </ul>
        </div>
    )
}

export default NavBar