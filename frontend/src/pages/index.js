import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"

const IndexPage = () => (
  <div>
    <NavBar />
    <SEO title="Home" />
    {/* Hero Image */}
    <div class="h-screen flex justify-center content-center flex-wrap">
      <div class="px-6 py-6 content-center">
        <div class="text-xl font-bold mb-2 text-center">Front-end Web Developer and UX Designer</div>
        <p class="text-gray-700 text-base text-center">I design and develop delightful experiences</p>
      </div>
    </div>
    <div class=" justify-center center-content flex-wrap bg-blue-400">
      <div class="px-6 py-12 mx-6 content-center">
        <div class="text-xl font bold mb-2 mt-4 text-center">Hello world, My name is Max</div>
        <p class="text-base text-center">I am a UX designer and web developer passionate about creating delightfully intuitive experiences. My background is in assisting people and brands with connecting to their audience and bringing their ideas to life.</p>
      </div>
    </div>
  
  </div>
)

export default IndexPage
