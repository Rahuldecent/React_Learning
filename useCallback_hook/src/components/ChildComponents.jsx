import React from 'react'

const ChildComponents = React.memo(
    (props) => {
        console.log("child components re-render")
      return (
        <div>
            <button>{props.btnName}</button>
        </div>
      )
    }
) 


export default ChildComponents