"use client";

export default function HelloWorld() {
  return (
    <div className="h-16 flex w-full items-center justify-center gap-6">
        
        <span className="relative flex size-3">
  <span className="absolute inline-flex h-full right-0 w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex size-3 rounded-full bg-sky-600"></span>
  
</span>
<h1 className="text-nowrap text-4xl">Hello World</h1>

<span className="relative flex size-3">
  <span className="absolute inline-flex h-full right-0 w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
  
</span>
    </div>
  )
}
