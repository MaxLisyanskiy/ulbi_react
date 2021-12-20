import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'rrrrrr', body: 'vvvvvvv'},
        {id: 2, title: 'hhhhhh', body: 'aaaaa'},
        {id: 3, title: 'asdas', body: 'eeeeeee'},
        {id: 4, title: 'xcxzx', body: 'wwwww'},
        {id: 5, title: 'qqqqqq', body: 'qqqq'},
    ])
    const[filter, setFilter] = useState({sort: '', query: ''})

    // сортировка
    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    // поиск
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedPosts.length !== 0
                ? <PostList posts={sortedAndSearchedPosts} title={'Список постов'} remove={removePost}/>
                : <h2>Посты не найдены!</h2>
            }
        </div>
    );
}

export default App;
