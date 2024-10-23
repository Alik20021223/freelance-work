import { RouterProvider } from 'react-router-dom';
import './App.css'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { router } from './router';


function App() {


  return (
    <>
      <Theme preset={presetGpnDefault} >
        <RouterProvider router={router} />
      </Theme>
    </>
  )
}

export default App
