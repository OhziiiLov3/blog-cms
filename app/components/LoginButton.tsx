import Link from "next/link";

const LoginButton = () => {
  return (
    <div>
        <Link href="/login">
            <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </Link>
    </div>
  )
}

export default LoginButton