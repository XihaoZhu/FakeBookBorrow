
export default function ResumeButton () {


  return (<>
    <a href="/Nick_CV.pdf" download={'/Nick_CV.pdf'} className="bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-5 rounded-xl border-gray-500 border-2">
    <span className="material-symbols-outlined">download</span> download CV
    </a>
  </>)
}