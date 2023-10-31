interface FormProps {
    prompt: string,
    setPrompt: any,
    onSubmit: any,
    isLoading: boolean,
    characterLimit: number,
}

const Form : React.FC<FormProps> = (props) => {
    const updatePromptValue = (text: string) => {
        if(text.length <= props.characterLimit){
            props.setPrompt(text);
        }
    } 
    const isPromptValid = props.prompt.length < props.characterLimit;

    let statusColor = "text-slate-500";
    let statusText = null;
    if(!isPromptValid){
        statusColor = "text-red-500";
        statusText = `Input must be less than ${props.characterLimit} characters`
    } 
    return ( 
        <>
            <div className="mb-6 text-slate-400">
                <p>Tell me what your brand is about and I will generate copy and keywords for you.</p>
            </div>

            <input 
                className="p-2 w-full rounded-md focus: outline-teal-200 focus: outline text-black"
                typeof="text" 
                placeholder="coffee" 
                onChange={(e) => updatePromptValue(e.currentTarget.value)}
                value={props.prompt}
            ></input>
            <div className={statusColor + "flex justify-between my-2 text-sm"}>
                <div>{statusText}</div>
                <div>{props.prompt.length}/{props.characterLimit}</div>
            </div>
            <button 
                onClick={props.onSubmit} 
                disabled={props.isLoading || !isPromptValid}
                className="bg-gradient-to-r from-teal-900 to blue-600 w-full disabled:opacity-50 p-2 rounded-sm"
                >Submit</button>
        </>
     );
}
 
export default Form;