'use client'
import { useEffect, useState } from 'react';
import { fetchPost, Post } from '../../api';
import Image from 'next/image';

interface PostDetailProps {
    params: {
        id: string
    }
}

const PostDetail: React.FC<PostDetailProps> = (props) => {
    const { id } = props.params;
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const postData = await fetchPost(parseInt(id));
                setPost(postData);
            } catch (error) {
                console.error('Error fetching post details:', error);
            }
        };
        fetchPostData();
    }, [id]);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Detalles de la Publicación</h1>
            {post ? (
                <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div>
                            <Image
                                src={post.imageUrl}
                                className="object-cover w-full h-auto rounded-lg"
                                width={400}
                                height={250}
                                alt="image post"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                            <p className="text-gray-600">{post.body}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center">Cargando...</p>
            )}
        </div>
    );
};

export default PostDetail;
