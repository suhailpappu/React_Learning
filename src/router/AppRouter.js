import React from 'react'

import {Route,Switch,BrowserRouter} from 'react-router-dom';
import PostsForm from '../components/PostsForm';
import Posts from '../components/Posts';
import EditPost from '../components/EditPost';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route  path="/" component={Posts} exact={true}/>
                <Route  path="/create" component={PostsForm}/>
                <Route  path="/edit/:id" component={EditPost}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
