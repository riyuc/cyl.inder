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
    const isPromptValid = props.prompt.length <= props.characterLimit;
    return ( 
        <div>
            <p>Tell me what your brand is about and I will generate copy and keywords for you.</p>

            <input 
                typeof="text" 
                placeholder="coffee" 
                onChange={(e) => updatePromptValue(e.currentTarget.value)}
                value={props.prompt}
                />
            <div>{props.prompt.length}/{props.characterLimit}</div>
            <button onClick={props.onSubmit} disabled={props.isLoading || !isPromptValid}>Submit</button>
        </div>
     );
}
 
export default Form;