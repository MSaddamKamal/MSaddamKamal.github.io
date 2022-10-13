
import Home from '../views/Home'

export interface routeObj {
    path:string
    element:React.ReactNode
}

const routes: routeObj[] =[
    {
        path:'/',
        element: <Home/>
    }

]


export {routes}