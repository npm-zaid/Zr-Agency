import React from 'react';
import { Sparkles } from 'lucide-react';
import { div } from 'framer-motion/client';

const SubTitle = ({title}) => {
  return (
    <div>
    <div
            className="flex mb-2 z-10 justify-center items-center text-sm bg-gradient-to-r from-[#61E4ED] via-zinc-700/50  to-zinc-700/50 w-fit m-auto p-[1.5px] rounded-full"
          
          >
            <div className="z-10 relative overflow-hidden bg-zinc-900/80 text-white font-bold p-2 px-4 rounded-full">
              <span className="bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text ">
                <Sparkles className="inline-block w-4 h-4 mr-2 text-[#61E4ED]" />
                 {title}
              </span>
              <div className="bg-gradient-to-r from-[#61E4ED]/30 via-transparent to-transparent absolute top-0 right-0 inset-0 z-0"></div>
            </div>
          </div>
          </div>
  );
}

export default SubTitle;
