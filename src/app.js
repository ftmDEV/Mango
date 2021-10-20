import React from 'react'
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom'
import {GlobalProvider} from './components/context/GlobalState'
import "./style.css"
import routes from './routes'
import MainLayout from './components/layout/MainLayout'

const App=()=>{
    return(
        <GlobalProvider>
            <Router>
                <MainLayout>
                    <Switch>
                        {routes.map(r=>(
                            <Route {...r} key={r.path}></Route>
                        ))}
                        
                    </Switch>
                </MainLayout>
            </Router>
        </GlobalProvider>
    )
}

export default App