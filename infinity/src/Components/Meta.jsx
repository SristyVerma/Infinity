import React from 'react'
import {Helmet} from "react-helmet";

const Meta = ({title}) => {
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
              
            </Helmet>
    </div>
  )
}

export default Meta