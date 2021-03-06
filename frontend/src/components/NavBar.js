import React from "react"

const NavBar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-sans font-family:Helvetica-Neue font-medium text-xl tracking-tight">Max Reinmueller</span>
        </div>
        <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-red-200 hover:border-red-100">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm font-sans font-family:Helvetica-Neue font-medium lg:flex-grow">
      {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200 mr-4">
        Portfolio
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-200">
        Blog
      </a> */}
    </div>
    {/* <div>
      <a href="#" class="font-sans font-family:Helvetica-Neue font-medium inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-400 hover:bg-white mt-4 lg:mt-0">Contact Me</a>
    </div> */}
  </div>
      </nav>
    </div>
  )
}

export default NavBar