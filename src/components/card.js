import React, { useEffect, useRef } from "react";

export default function Card(props) {
  const [cardOpen, setCardOpen] = React.useState(false);

  var law = props.lawData

  const m = useRef(null)

  var ff = () => {
    m.current.classList.toggle("line-clamp-3")
  }



  return (
    <>


      <div className="p-20 bg-white-100 w-full">

        <div className="bg-white rounded-lg shadow-lg">
          <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" className="rounded-t-lg" />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-purple-800">{law.title}
            </h2>

            <p ref={m} className="text-purple-700 whitespace-pre-wrap mb-2 line-clamp-3">{law.content}</p>


            <button id="showBtn" onClick={ff} className="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</button>
          </div>

        </div>
      </div>

    </>


  );
}