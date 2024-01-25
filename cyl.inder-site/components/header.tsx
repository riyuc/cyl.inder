import { Fragment, useState, type MouseEvent } from "react"
import About from "./about"

interface ICustomLinkProps {
  url: string
  label: string
  children?: React.ReactNode
}

const CustomLink = ({ url, label, children }: ICustomLinkProps) => {
  return <a href={url} className="hover:text-blue-500 underline underline-offset-4">{label}{children}</a>
}

const Header = () => {
  const [showAbout, setShowAbout] = useState(false)

  function handleShowAbout(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    setShowAbout(prev => !prev);
  }

  const navLinks: ICustomLinkProps[] = [
    {
      url: "https://github.com/riyuc",
      label: "@riyuc"
    },
    {
      url: "https://github.com/riyuc/cyl.inder",
      label: "source"
    },
    {
      url: "localhost:3000",
      label: "homepage"
    },
  ]

  return <div className="my-4 text-center">
  <h1 className="font-light text-4xl">cyl.inder</h1>
  <p>
    {navLinks.map((link: ICustomLinkProps, idx: number) => <Fragment key={idx}>
      <CustomLink url={link.url} label={link.label}>{link.children ?? null}</CustomLink>&nbsp;|&nbsp;
    </Fragment>
    )}
    <button className="hover:text-blue-500 underline underline-offset-4" onClick={handleShowAbout}>about</button>
  </p>
  <About setShow={handleShowAbout} show={showAbout}></About>
</div>
}

export default Header