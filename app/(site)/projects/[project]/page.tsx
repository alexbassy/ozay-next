import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
};

export default async function Project({ params }: Props){
    const slug = params.project;
    const project = await getProject(slug);
    
    return ( 
        <div>
            <header className="flex items-center justify-between">
                
                <h1 className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-7xl">{project.name}</h1>
                
                <a 
                    href={project.url} 
                    title="View Project" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 rounded-lg text-gray-500 font-bold px-2 whitespace-nowrap hover:bg-emerald-400 hover:text-zinc-50 transition"
                >

                View Projects

                </a>


            </header>

            {/* content goes here */}
            <div className="text-lg text-gray-700 mt-5">
                <PortableText 
                    value={project.content}
                />
            </div>
            

            {/* image goes here */}
            <Image 
                src={project.image}
                alt={project.name}
                width={1920}
                height={1080}
                className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
            />
        </div>
    )
}