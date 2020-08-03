import React from "react"
import Image from "./image"

const WorkCard = () => {
  return (
    <div class="flex my-10">
      
      <div class="max-w relative rounded overflow-hidden shadow-lg w-1/3 px-2 group hover:shadow-inner">
      <Image class="w-full" />
        <div class="px-6 py-4">
          <div class="font-sans font-family:Helvetica-Neue font-medium text-xl mb-2">logFooBar</div>
          <p class="text-gray-700 text-base">My personal journal about UX, tech, and random stuff. A fullstack CRUD application with authentication built using MongoDB, Express, React, and Node deployed with Heroku </p>
          <a href="https://logfoobar.herokuapp.com" target="https://logfoobar.herokuapp.com">
            <button class="bg-white hover:bg-gray-100 hover:shadow-inner text-gray-800 font-semibold py-2 px-4 rounded shadow-lg">
            Go
          </button></a>
        </div>
      </div>
      
      <div class="max-w relative rounded overflow-hidden shadow-lg w-1/3 px-2 hover:shadow-inner">
      <Image class="w-full" />
        <div class="px-6 py-4">
          <div class="font-sans font-family:Helvetica-Neue font-medium text-xl mb-2">Maynooth Furniture</div>
          <p class="text-gray-700 text-base">UX project for a fictitious furniture store designed with adobe XD and developed with Gatsby and Tailwind CSS </p>
          <button class="absolute bottom-0 mb-4 bg-white hover:bg-gray-100 hover:shadow-inner text-gray-800 font-semibold py-2 px-4 rounded shadow-lg">
            Go
          </button>
        </div>
      </div>
      
      <div class="max-w relative rounded overflow-hidden shadow-lg w-1/3 px-2 hover:shadow-inner">
      <Image class="w-full" />
        <div class="px-6 py-4">
          <div class="font-sans font-family:Helvetica-Neue font-medium text-xl mb-2">Gif Tastic</div>
          <p class="text-gray-700 text-base">Use key words to search for gifs. Gifs are generated by making an Ajax call to the Giphy API. </p>
          <a href="https://maxreinmueller.github.io/GifTastic" target="https://maxreinmueller.github.io/GifTastic">
            <button class="absolute bottom-0 mb-4 bg-white hover:bg-gray-100 hover:shadow-inner text-gray-800 font-semibold py-2 px-4 rounded shadow-lg">
            Go
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default WorkCard;