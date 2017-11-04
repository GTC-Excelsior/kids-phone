import React from 'react';

const Choice = (props) => (
   <div>
        <button
          className="big-button"
        >
          {props.questions}
        </button>
        <ul>
          <li><button className="small-button"> I’m sorry to hear that. What kinds of things are they doing or saying? </button></li>
          <li><button className="small-button"> Are they bullying you? </button></li>
          <li><button className="small-button"> Tell me about your experience </button></li>
          <li><button className="small-button"> What did you do to them? </button></li>
        </ul>
        <button
          onClick={props.pickOption}
          className="big-button"
        >
          Click to Proceed
        </button>
      </div>
);

export default Choice;