import React, { useState } from 'react'

export const Contain = () => {
  const [modal, setmodal] = useState(false);
  return (
    <div className='ml-48'>
      <div>
        <h1 className='text-6xl my-20'>Huzaifa Placeholder</h1>
        <div className='text-2xl'>
          <span className=''> Free fake and reliable API for testing and prototyping.</span>
          <p className='my-5'>Powered by <a href="https://github.com/huzaifasaleem005" className='border-b-2 border-black'>HUZAIFA Server</a> + <a href="https://github.com/huzaifasaleem005" className='border-b-2 border-black'> LowDB.</a></p>
          <p className='text-lg font-bold text-slate-900'>Serving ~3 billion requests each month.</p>
        </div>
      </div>

      <div className='my-48'>
        <h1 className='text-5xl '>Sponsors</h1>
        <p className='my-6'>HUZAIFA Placeholder is supported by the following companies and Sponsors on GitHub, check them out 💖</p>
        <a href="https://mockend.com/"><img className='h-[100px] my-10' src="https://jsonplaceholder.typicode.com/mockend.svg" alt="" /></a>
        <p>
          <a href="https://zuplo.link/json-server-web" target="_blank">
            <img src="https://github.com/typicode/json-server/assets/5502029/928b7526-0fdf-46ae-80d9-27fa0ef5f430"></img>
          </a>
        </p>
        <p className='my-12'>
          <a href="https://github.com/sponsors/typicode">Your company logo here</a>
        </p>
      </div>
      <div >
        <h1 className='text-4xl'>Try it</h1>
        <p className='my-8'>Run this code here, in a console or from any site:</p>

        <div className='bg-slate-800 w-[900px] h-[120px] rounded-lg text-sm '>
          <div className='ml-8 flex flex-col '>
            <p className='py-4'><span className='text-purple-800 '>fetch</span> <span className='text-yellow-600'> ('https://jsonplaceholder.typicode.com/todos/1')</span> </p>
            <p className='ml-12 text-white'>. <span className='text-purple-800'>then</span> (response = response.json())</p>
            <p className='ml-12 text-white'>. <span className='text-purple-800'>then</span> (json = console. <span className='text-purple-800'>log</span> (json))</p>
          </div>
        </div>
      </div>
      {

        modal &&
        <>
          <div className=' h-[100px] my-2  bg-slate-800 w-[900px] h-[200px] rounded-lg text-sm'>
            <div className='text-red-400 ml-10 my-2 '>
              <p className='py-4'>"userId": <span className='text-purple-600'>1,</span> </p>
              <p className=''>"id": <span className='text-purple-600'>1,</span> </p>
              <p className='my-2'>"title": <span className='text-white'>"delectus aut autem,"</span> </p>
              <p className='my-2'>"completed": <span className='text-purple-600'>false</span> </p>
            </div>
            <button className='bg-black text-white ml-10 p-2' onClick={() => setmodal(false)}>Close Script</button>
          </div>
          <p>Congrats! You've made your first call to  HUZAIFA Placeholder. 😃 🎉</p>
        </>

      }
      <div className=''>
        <button className='bg-black text-white font-bold p-3 my-6' onClick={() => setmodal(true)}>Run Script</button>
      </div>
      <div className='my-20'>
        <h1 className='text-4xl'>When to use</h1>
        <p className='my-10 text-sm'>HUZAIFA Placeholder is a free online REST API that you can use <strong>whenever you need some fake data. </strong> It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.</p>
      </div>
      <div>
        <h1 className='text-4xl'>Resources</h1>
        <p className='my-7 text-sm'>HUZAIFA Placeholder comes with a set of 6 common resources:</p>
        <div className='text-sm ml-4'>
          <div className='flex gap-14 '>
            <a href="https://huzaifa-api.vercel.app/posts" className='text-blue-800'>/posts</a>
            <p className=''>100 posts</p>
          </div>

          <div className='flex gap-6 my-2'>
            <a href="https://huzaifa-api.vercel.app/comments" className='text-blue-800'>/comments</a>
            <p className=''>500 comments</p>
          </div>

          <div className='flex gap-12 my-2'>
            <a href="https://huzaifa-api.vercel.app/albums" className='text-blue-800'>/albums</a>
            <p className=''>100 albums</p>
          </div>

          <div className='flex gap-12 my-2'>
            <a href="https://huzaifa-api.vercel.app/photos" className='text-blue-800'>/photos</a>
            <p className=''>5000 photos</p>
          </div>

          <div className='flex gap-14 my-2'>
            <a href="https://huzaifa-api.vercel.app/todos" className='text-blue-800'>/todos</a>
            <p className=''>200 todos</p>
          </div>

          <div className='flex gap-14'>
            <a href="https://huzaifa-api.vercel.app/users" className='text-blue-800'>/users</a>
            <p className=''>10 users</p>
          </div>
        </div>
        <p className='my-10 text-sm'><strong className=' '>Note</strong>:<span className='ml-2'>resources have relations. For example: posts have many comments, albums have many photos, ... see guide for the full list.</span></p>
      </div>
      <div className='my-20'>
        <h1 className='text-4xl'>Routes</h1>
        <p className='my-8 text-sm'>All HTTP methods are supported. You can use http or https for your requests.</p>
      <div className='ml-4 text-sm'>
        <div className='flex'>
          <p>GET</p>
          <a href="#" className='ml-14 text-slate-800 mb-2'>/posts</a>
        </div>
        <div className='flex '>
          <p>GET</p>
          <a href="#" className='ml-14 text-slate-800'>/posts/1</a>
        </div>
        <div className='flex my-2'>
          <p>GET</p>
          <a href="#" className='ml-14 text-slate-800'>/posts/1/comments</a>
        </div>
        <div className='flex my-2'>
          <p>GET</p>
          <a href="#" className='ml-14 text-slate-800'>	/comments?postId=1</a>
        </div>
        <div className='flex my-2'>
          <p>POST</p>
          <a href="#" className='ml-12 text-slate-800'>/posts</a>
        </div>
        <div className='flex my-2'>
          <p>PUT</p>
          <a href="#" className='ml-14 text-slate-800'>/posts/1</a>
        </div>
        <div className='flex my-2'>
          <p>PATCH</p>
          <a href="#" className='ml-10 text-slate-800'>/posts/1</a>
        </div>
        <div className='flex'>
          <p>DELETE</p>
          <a href="#" className='ml-10 text-slate-800'>/posts/1</a>
        </div>
      </div>
      <p className='my-8 text-sm'><strong>NOTE</strong>: see guide for usage examples.</p>
      </div>
      <div className='text-sm '>
        <h1 className='text-4xl'>Use your own data</h1>
        <p className='my-8'>With our sponsor Mockend and a simple GitHub repo, you can have your own fake online REST server in seconds</p>
      <div className='my-20 h-[10px]'>
      <strong><a href="https://github.com/huzaifasaleem005">You can sponsor this project (and others) on GitHub</a></strong>
      <p className='my-4'>Coded and maintained with ❤️ by Huzaifa © 2024</p>
      </div>
      </div>
    </div>

  )
} 