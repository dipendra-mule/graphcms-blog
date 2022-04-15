import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';
import { comment } from 'postcss';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result)) 
  }, [])

  return (
   <>
        {comment.length > 0 && (
          <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
              {comments.length}
              {' '}
              {comments.length == 1 ? 'Comment' : 'Comments'}
          
            </h3>
            {comments.map((comment) => (
              <div key={comment.createdAt} className="border-b border-gray-100 mb-4 pb-4">
                <p className='mb-4 text-sm'>
                  <span className='text-sm'>{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MM DD, YYYY')}
                </p>
                <p className='whitespace-pre-line text-gray-600 w-full'>{parse(comment.comment)}</p>
              </div>
            ))}
          </div>
        )}
   </>
  )
}

export default Comments;