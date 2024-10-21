"use client";
import {BsArrowDownRight} from 'react-icons/bs' ;
import Link from "next/link";

const services =[
  {
    num: "01",
    title: "web development",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores.",
    href: ""
  },
  {
    num: "02",
    title: "UI/UX design",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores.",
    href: ""
  },
  {
    num: "03",
    title: "Logo design",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores.",
    href: ""
  },
  {
    num: "04",
    title: "SEO",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores.",
    href: ""
  },
 
]

import {motion} from "framer-motion"

const Services = () => {
  return (
    <section>
    <div className="container mx-auto">
      services page
    </div>
    </section>
  )
}

export default Services;