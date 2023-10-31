interface ResultsProps{
    snippet: string,
    keywords: string[],
    onBack: any;
    prompt: string,
}

const Results : React.FC<ResultsProps> = (props) => {
    const keywordElements = [];
    for(let i = 0; i < props.keywords.length; i++){
        const element = <div key={i}>#{props.keywords[i]}</div>
        keywordElements.push(element);
    }
    return ( 
        <>
        <div>
            <div>
                <div>
                    <div>Prompt:</div>
                    <div>{props.prompt}</div>
                </div>
                <div>
                    <div>Snippet:</div>
                    <div>{props.snippet}</div>
                </div>
                <div>
                    <div>Keywords: </div>
                    <div>{props.keywords.join(", ")}</div>
                </div>
            </div>
        </div>
            <button onClick={props.onBack}>Back</button>
        </>
     );
}
 
export default Results;