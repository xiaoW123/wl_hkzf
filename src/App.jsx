import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo((props) => {
  return (
    <div className="App">
      <Suspense fallback="">
        <div>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
})

export default App
// import React, { Suspense } from 'react'
// import { useRoutes } from 'react-router-dom'
// import routes from './router'

// function App() {
//   return (
//     <div className="App">
//       <Suspense fallback="">
//         <div>{useRoutes(routes)}</div>
//       </Suspense>
//     </div>
//   )
// }

// export default App
