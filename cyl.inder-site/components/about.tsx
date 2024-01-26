import { type MouseEvent } from "react"

interface IAboutProps {
  show: boolean
  setShow: (e: MouseEvent<HTMLButtonElement>) => void
}

const About = ({ show, setShow }: IAboutProps) => {
  return show ? <main className="absolute top-0 bottom-0 left-0 right-0 bg-black z-50 p-8 flex justify-center">
    <article className="dark:prose-invert prose prose-p:text-left text-left">
      <h1>About this project</h1>
      <blockquote>It is just a project for me to learn full-stack development.</blockquote>
      <p>{`Hi, I'm Duc Nguyen.`}</p>
      <p>I created the app solely for the purpose of learning Python back-end development and also trying out AWS for the first time.</p>
      <p>While at school, everyone talks about Python and AWS and how important it is to learn those types of technologies cause it is the industry standard</p>
      <p>Going forward, I will try to improve the UI as well as adding some new features, but who knows!</p>
      <p>Thanks for coming to my Ted Talk</p>
      <button className="rounded-full p-2 border hover:text-green-500 hover:border-green-500 transition-all ease-in-out duration-300" onClick={setShow}>Ok, good to know.</button>
    </article>
  </main> : null;
}

export default About;