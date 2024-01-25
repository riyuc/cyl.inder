import { log } from "console";
import { useState } from "react";
import Form from "./form";
import Results from "./results";
import Image from "next/image";
import Header from "./header";

const Cylinder : React.FC = () => {
    const CHARACTER_LIMIT : number = 32;
    const ENDPOINT : string = "https://zdubp8gim8.execute-api.us-east-1.amazonaws.com/prod/generate_snippet_and_keywords"
    const [prompt, setPrompt] = useState("");
    const [snippet, setSnippet] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [hasResults, setHasResults] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = () => {
        console.log("Submitting: " + prompt);
        setIsLoading(true);
        fetch(`${ENDPOINT}?prompt=${prompt}`)
            .then((res) => res.json()).then(onResult);
    };

    const onResult = (data : any) => {
        setSnippet(data.snippet);
        setKeywords(data.keywords);
        setIsLoading(false);
        setHasResults(true);
    }

    const onReset = (data : any) => {
        setPrompt("");
        setHasResults(false);
        setIsLoading(false);
    }

    let displayedElement = null;

    if(hasResults){
        displayedElement = 
            <Results 
                prompt={prompt} 
                snippet={snippet} 
                keywords={keywords} 
                onBack={onReset} />
    } else {
        displayedElement = 
            <Form 
                characterLimit={CHARACTER_LIMIT} 
                prompt={prompt} 
                setPrompt={setPrompt}
                onSubmit={onSubmit} 
                isLoading={isLoading} />
    }
    const gradientText = "text-white text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% font-light w-fit mx-auto"
    
    return ( 
        <div className=" bg-gradient-to-b from-slate-950 bg-pink-950/20 h-full w-full min-h-screen flex flex-col bg-center">
            <div className="mx-auto">
                <div className=" p-4 rounded-md text-white min-h-full">
                    <div className="text-center">
                        <h1 className={gradientText + "font-light text-4xl"}>cyl.inder</h1>
                        <Header></Header>
                        <div className={gradientText + "underline underline-offset-4"}>Your AI branding assistant.</div>
                    </div>
                    {displayedElement}
                </div>
            </div>
        </div>
     );
}
 
export default Cylinder;