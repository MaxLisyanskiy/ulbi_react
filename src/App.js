import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from './components/UI/select/MySelect';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'rrrrrr', body: 'vvvvvvv'},
        {id: 2, title: 'hhhhhh', body: 'aaaaa'},
        {id: 3, title: 'asdas', body: 'eeeeeee'},
        {id: 4, title: 'xcxzx', body: 'wwwww'},
        {id: 5, title: 'qqqqqq', body: 'qqqq'},
    ])
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
       setPosts(posts.filter(p => p.id !== post.id ))
    }

    const sortPosts = (sort) => {
      setSelectedSort(sort);
      setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
              <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка по:"
                options={[
                  {value: 'title', name: 'По заголовку'},
                  {value: 'body', name: 'По описанию'}
                ]}
              />
            </div>
            {posts.length !== 0 
              ? <PostList posts={posts} title={'Список постов'} remove={removePost}/>
              : <div>Посты не найдены!</div>
            }
        </div>
    );
}

export default App;
