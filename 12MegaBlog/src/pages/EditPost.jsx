import React,{useEffect,useState} from 'react'
import { Container,PostCard,PostForm } from '../componets'
import appwriteSerive from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteSerive.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])
  return post? (
    <div className='py-8'>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  ):null
}

export default EditPost
