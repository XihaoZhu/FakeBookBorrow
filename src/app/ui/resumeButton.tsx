
export default function ResumeButton () {


  return (<>
    <a href="/CV.pdf" download={'/CV.pdf'} className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-5 rounded-xl border-gray-500 border-2">
    <span className="material-symbols-outlined">download</span> download CV
    </a>
  </>)
}