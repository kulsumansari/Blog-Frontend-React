import {Route , Switch} from 'react-router-dom'
import Blogs from '../pages/Blogs/Blogs'
import Blog from '../pages/Blog/Blog'
import NavBar from '../Components/NavBar/NavBar'

export default function AppRouter(props){
    return(
        <div>
            <NavBar />
            <Switch>

                <Route path='/' exact>
                    <Blogs/>  
                </Route>

                <Route path='/:blogId' exact>
                    <Blog />
                </Route>

            </Switch>
        </div>
    )
}