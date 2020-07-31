import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import WorkCard from "../components/workCard"



const IndexPage = () => (
  <div>
    <NavBar />
    <SEO title="Home" />
    {/* Hero Image */}
    <div class="h-screen flex justify-center content-center flex-wrap">
    {/* https://tailwindcss.com/img/card-top.jpg */}
    <img class="" src="https://github.com/MaxReinmueller/maxreinmueller.github.io/blob/master/frontend/src/images/Group%2095.png" alt="background" />
      <div class="px-6 py-6 content-center">
        <div class="text-xl font-bold mb-2 text-center">Front-end Web Developer and UX Designer</div>
        <p class="text-gray-700 text-base text-center">I design and develop delightful experiences</p>
      </div>
    </div>
    {/* introduction and background */}
    <div class=" justify-center center-content flex-wrap bg-blue-400">
      <div class="px-6 py-12 mx-6 content-center">
        <div class="text-xl font-bold mb-2 mt-4 text-center">Hello world, My name is Max</div>
        <p class="text-base text-center">I am a UX designer and web developer passionate about creating fantastic user experiences.</p>
      </div>
    </div>
  {/* recent work */}
  <div class=" justify-center center-content flex-wrap bg-white">
      <div class="px-6 py-12 mx-6 content-center">
        <div class="text-xl font-bold mb-2 mt-4 text-center">My Recent Work</div>
        <WorkCard class=""/>
      </div>
    </div>
  </div>
)

export default IndexPage
