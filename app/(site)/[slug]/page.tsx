import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);


return (
    
    <div>
        <h1 className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent text-7xl">
            {page.title}
        </h1>

        <div className="text-lg text-gray-700 mt-10">
            <PortableText value={page.content}/>
        </div>
    </div>
)
}