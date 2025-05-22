import { BookOpen } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-700 dark:text-gray-300">
      <div className="relative">
        <BookOpen className="h-16 w-16 text-blue-600  animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-t-2 border-b-2 border-blue-600  rounded-full animate-spin"></div>
        </div>
      </div>
      <h2 className="mt-4 text-xl text-[#172331] font-bold ">Loading...</h2>
      
    </div>
  );
};

export default Loading;