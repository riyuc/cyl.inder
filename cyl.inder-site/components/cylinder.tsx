import { log } from "console";
import { useState } from "react";
import Form from "./form";
import Results from "./results";

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
    return ( 
        <>
            <h1>cyl.inder</h1>
            {displayedElement}
           
        </>
     );
}
 
export default Cylinder;