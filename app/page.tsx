import Greeting from "./components/Greeting";



export default function Home() {
  return (
  
      <div>
      <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-white px-6  py-4">Recent</h1>
      <Greeting/>
    </div>

    
  );
}
