import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Image1 from "../components/image1"
import Image2 from "../components/image2"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import WorkCard from "../components/workCard"
import Footer from "../components/footer"



const IndexPage = () => (
  <div>
    <NavBar />
    <SEO title="Home" />
    {/* Hero Image */}
    {/* <Image class="w-full " /> */}

    {/* <div class=" flex justify-center content-center flex-wrap bg-white">
        <div class="px-6 py-6 content-center">
        <div class="text-xl font-bold text-white mb-2 text-center">UX UI Designer and Web Developer</div>
        <p class="text-white text-base text-center">I design and develop delightful experiences</p>
      </div>
    </div> */}
    <div class="flex mt-12 justify-center content-center">
      
    <div class="max-w-sm rounded overflow-hidden  mr-12">
      <Image2 style="h-40rem"/>
      <div class="px-6 py-4 mt-6">
          <div class="font-sans font-family:Helvetica-Neue font-bold text-xl mb-2">UX & UI Design</div>
          <p class="text-gray-700 text-base">
            I create experiences that foster utility, understanding, and appreciation by balancing beliefs, ideas, and intention with reality, purpose, and useability.
          </p>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden">
      <div class="px-6 py-4">
          <div class="font-sans font-family:Helvetica-Neue font-bold text-xl mb-2 mt-4">Web Development  </div>
          <p class="text-gray-700 text-base">
            Web development technologies I use include: Git, React, Gatsby, MongoDB, Javascript, HTML, CSS, Express, and Node.
          </p>
        </div>
        <Image1 />
      </div>
      
    </div>
  


    {/* introduction and background */}
    {/* <div class=" justify-center center-content flex-wrap bg-blue-300">
      <div class="px-6 py-12 mx-6 content-center">
        <div class="text-xl font-bold mb-2 mt-4 text-center">Hello world, My name is Max</div>
        <p class="text-base text-center">I am a UX designer and web developer passionate about creating fantastic user experiences.</p>
      </div>
    </div> */}
  {/* recent work */}
  <div class=" justify-center center-content flex-wrap bg-white">
      <div class="px-6 py-12 mx-6 content-center">
        <div class="text-xl font-sans font-family:Helvetica-Neue font-bold mb-2 mt-4 text-center">My Recent Work</div>
        <WorkCard class=""/>
      </div>
    </div>

  <Footer />
  </div>
)

export default IndexPage
