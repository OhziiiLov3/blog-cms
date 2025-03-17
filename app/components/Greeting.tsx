import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 


const Greeting = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="px-6 mt-4">
      {session ? (
        <p className="text-2xl font-semibold  leading-7 text-gray-800 dark:text-gray-300">
          Welcome, {session.user?.name}!  
        </p>
      ) : (
        <p className="text-xl leading-7 text-gray-600 dark:text-gray-400">
          Welcome to our blog! Please sign in to get personalized content.
        </p>
      )}
    </div>
  );
};

export default Greeting;

