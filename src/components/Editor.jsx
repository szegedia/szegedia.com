// import * as HTML5Tokenizer from "simple-html-tokenizer"
// import React from "@astrojs/react"
// import { Image } from "@astrojs/image/components"
// import jsBeautify from "js-beautify"

// const Editor = ({ projects, children }) => {
//   const indented = jsBeautify.html_beautify(children.props.value, { indent_size: 2 })
//   const lines = indented.split("\n")
//   const html = lines
//     .map(line => {
//       const tokens = HTML5Tokenizer.tokenize(line)
//       const tag = tokens
//         .map(({ type, tagName, attributes, chars, selfClosing }) => {
//           const punctuationStart = `<span class="punctuation">&lt;</span>`
//           const punctuationEnd = `<span class="punctuation">&gt;</span>`
//           const punctuationClosing = `<span class="punctuation">&lt;/</span>`
//           const span = (className, value) => `<span class="${className}">${value}</span>`
//           const className = attributes
//             ?.map(([attr, value]) =>
//               attr === "data-class"
//                 ? ` <span class="attribute">class=${span("attributeVal", '"' + value + '"')}</span>`
//                 : ""
//             )
//             .join("")

//           if (tagName === "typing") {
//             if (type === "StartTag") {
//               const id = attributes?.[0]?.[1]
//               return `<span class="tagValue" id="${id}"></span>`
//             }

//             return ""
//           }

//           return {
//             StartTag: selfClosing
//               ? `${punctuationStart}${span("tagName", tagName)}${className}${punctuationClosing}`
//               : `${punctuationStart}${span("tagName", tagName)}${className}${punctuationEnd}`,
//             EndTag: `${punctuationClosing}${span("tagName", tagName)}${punctuationEnd}`,
//             Chars: `${span("tagValue", chars)}`
//           }[type]
//         })
//         .join("")
//       return tag
//     })
//     .join("\n")

//   return (
//     <div className="editor rounded-md bg-neutral-900 text-sm">
//       <div className="relative py-2 text-center">
//         <div className="absolute top-1/2 flex h-8 -translate-y-1/2 items-center space-x-1.5 px-3">
//           <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
//           <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
//           <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
//         </div>
//         <h6 className="text-xs text-zinc-300">Projects — szegedia.com</h6>
//       </div>
//       <pre className="grid grid-cols-12">
//         <div className="col-span-3 px-2 text-zinc-300">
//           <ul>
//             {projects.map((project, index) => (
//               <li className="flex" key={`project-${index}`}>
//                 <img src={project.image} />
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="col-span-5 flex border-l border-white/10 bg-white/5 pt-2">
//           <div className="mr-2 w-10 text-right text-neutral-600">
//             {new Array(lines.length + 1).fill(null).map((_, line) => `${line + 1}\n`)}
//           </div>
//           <code className="w-auto overflow-auto" dangerouslySetInnerHTML={{ __html: html }} />
//         </div>
//         <div className="col-span-4 border-l border-zinc-500 bg-white">
//           <header>
//             <h2 id="projectCardName"></h2>
//           </header>
//           <p>
//             <strong>Description:</strong> description here
//           </p>
//         </div>
//       </pre>
//     </div>
//   )
// }

// export default Editor
