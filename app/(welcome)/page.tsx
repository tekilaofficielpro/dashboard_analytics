import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1 className='text-white text-6xl'>Hello World</h1>
      <button className='mt-4 ml-10 rounded'>
        <Link href="/dashboard" className='bg-primary px-4 py-3'>
          Go to Dashboard
        </Link>
      </button>
    </div>
  )
}

export default page