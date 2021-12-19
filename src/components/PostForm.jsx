import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [inputs, setInputs] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            ...inputs
        }
        create(newPost)
        setInputs({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={inputs.title}
                onChange={e => setInputs({...inputs, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={inputs.body}
                onChange={e => setInputs({...inputs, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
    );
};

export default PostForm;