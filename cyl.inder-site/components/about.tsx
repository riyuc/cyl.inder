import { type MouseEvent } from "react"

interface IAboutProps {
  show: boolean
  setShow: (e: MouseEvent<HTMLButtonElement>) => void
}

const About = ({ show, setShow }: IAboutProps) => {
  return (
    <div></div>
  )
}

export default About;