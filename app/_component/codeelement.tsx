import Image from "next/image";

export default function CodeElement() {
  return (
    <>
     <div className="absolute right-0 top-0 text-base font-mono text-[#64ffda]/70 whitespace-pre hidden lg:block bg-[#112240] p-8 rounded-lg shadow-2xl transform scale-110 border border-[#64ffda]/20">
              <span className="opacity-50">const</span> <span className="text-[#64ffda]">developer</span> = {'{'}
              <br />{'  '}name: <span className="text-[#ffd700]">'Kenny Developer'</span>,
              <br />{'  '}role: <span className="text-[#ffd700]">'Full Stack Engineer'</span>,
              <br />{'  '}skills: [<span className="text-[#ffd700]">'Next.js'</span>, <span className="text-[#ffd700]">'React'</span>, <span className="text-[#ffd700]">'TypeScript'</span>],
              <br />{'  '}passionate: <span className="text-orange-400">true</span>,
              <br />{'}'}
            </div>
    </>
  );
}