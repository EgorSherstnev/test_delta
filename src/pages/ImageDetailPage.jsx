import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createComment, getImageById } from '../http/imagesAPI';

const ImageDetailPage = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const [image, setImage] = useState('');
   const [commentsList, setCommentsList] = useState([]);
   const [newComment, setNewComment] = useState('');

   useEffect(() => {
      const fetchImage = async () => {
         try {
            console.log(id)
            let data = await getImageById(id);
            console.log(data);
            setImage(data);
            setCommentsList(data.comments || []);
            console.log('data.comments в ImageDetailPage', data.comments)
         } catch (e) {
            alert(e.response.data.message);
         }
      };
   
      fetchImage();
   }, [id]);

   console.log(image)

   const handleAddComment = async () => {
      try {
         console.log(`handleAddComment ${newComment}`);

         await createComment(newComment, id);

         navigate("/");
      } catch (error) {
         console.error('Ошибка при добавлении комментария:', error);
      }
   };

   const toHomePage = () => {
      return (
         navigate("/")
      )
   }

   return (
      <section className='task-details__container container'>
         <div className='image-detailcard'>
            <div >
               <img 
                  className='image-detail'
                  alt={image.id}
                  src={image.largeImage}
               />
            </div>
            <div>
               {commentsList.map((comment) => (
                  <div key={comment.id}>
                     <div>{comment.author}</div>
                     <div>{comment.text}</div>
                  </div>
               ))}
            </div>
            <div>
               <input
                  className="comment__input input"
                  type="text"
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
               />
            </div>
            <button 
               className='comment__button button'
               onClick={handleAddComment}
            >
                  Add comment
            </button>
            <button 
               className='homepage__button button'
               onClick={toHomePage}
            >
                  MAIN PAGE
            </button>
      </div>
      </section>
   );
}

export default ImageDetailPage;
