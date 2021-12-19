import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS', body: 'Descr'},
        {id: 2, title: 'JS 2', body: 'Descr'},
        {id: 3, title: 'JS 3', body: 'Descr'},
        {id: 4, title: 'JS 4', body: 'Descr'},
        {id: 5, title: 'JS 5', body: 'Descr'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList
                posts={posts}
                title={'Список постов'}
            />
        </div>
    );
}

export default App;
