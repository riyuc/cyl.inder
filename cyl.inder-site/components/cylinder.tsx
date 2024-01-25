import { log } from "console";
import { useState } from "react";
import Form from "./form";
import Results from "./results";
import Image from "next/image";
import logo from "../public/logo.svg"

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
        <div className=" flex bg-center">
            <div className="m-auto">
                <div className=" p-4 rounded-md text-white">
                    <div className="text-center my-6">
                        <Image src={logo} width={42} height={42} alt="logo"/>
                        <h1 className={gradientText + " text-3xl"}>cyl.inder</h1>
                        <div className={gradientText}>Your AI branding assistant.</div>
                    </div>
                    {displayedElement}
                </div>
            </div>
        </div>
     );
}
 
export default Cylinder;