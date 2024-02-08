'use client'
import { useState, useEffect } from 'react';
import { fetchPosts, Post } from '../api'
import { Search } from 'app/components/shared/search';
import { PostComponent } from 'app/components/shared/post';
import { PostForm } from 'app/components/postForm';
import Swal from 'sweetalert2';

const Listado: React.FC = () => {
    const [loadedPosts, setLoadedPosts] = useState<Post[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [noResults, setNoResults] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPostsData = async () => {
            setIsLoading(true);
            try {
                const posts = await fetchPosts();
                setLoadedPosts(posts);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setIsLoading(false);
            }
        };
        fetchPostsData();
    }, []);

    useEffect(() => {
        const filtered = loadedPosts.filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filtered);
        setNoResults(filtered.length === 0 && searchTerm !== '');
    }, [loadedPosts, searchTerm]);

    const handleCreateOrUpdatePost = (postData: Post) => {
        const {id} = postData;
        const existingPostIndex = loadedPosts.findIndex(post => post.id === id);
        
        if(existingPostIndex !== -1) {
            const updatedPosts = [...loadedPosts];
            updatedPosts[existingPostIndex] = postData;
            setLoadedPosts(updatedPosts);
            localStorage.setItem('posts', JSON.stringify(updatedPosts));

            Swal.fire({
                icon: 'success',
                title: 'Post actualizado',
                text: 'El post se ha actualizado correctamente.',
                confirmButtonText: 'Aceptar'
            });
        } else {
            const { title, body } = postData;
            const newPostId = loadedPosts.length + 1;
            const newPostObject: Post = { userId: 1, id: newPostId, title, body, imageUrl: 'https://source.unsplash.com/random' };
            const updatedPosts = [...loadedPosts, newPostObject];
            setLoadedPosts(updatedPosts);
            localStorage.setItem('posts', JSON.stringify(updatedPosts));
    
            Swal.fire({
                icon: 'success',
                title: 'Post creado',
                text: 'El post se ha creado correctamente.',
                confirmButtonText: 'Aceptar'
            });
        }
        
    }

    const handleDeletePost = (postId: number) => {
        const updatedPosts = loadedPosts.filter(post => post.id !== postId);
        setLoadedPosts(updatedPosts);
    };

    const handleEdit = (post: Post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold m-4 pl-4">Listado de Publicaciones</h1>
            <div className="container flex justify-between mr-4">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <button onClick={() => setIsModalOpen(true)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 m-4 border border-blue-500 hover:border-transparent rounded">New Post</button>
                <PostForm
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreateOrUpdate={handleCreateOrUpdatePost}
                selectedPost={selectedPost}
            />
            </div>
            {isLoading ? (
                <p className='text-center mt-3 text-blue-500 font-bold'>Cargando...</p>
            ) : (
                <div className='flex flex-wrap mx-4'>
                    {filteredPosts.length > 0 && !noResults ? (
                        filteredPosts.map((post) => (
                            <PostComponent key={post.id} post={post} onDelete={handleDeletePost} onEdit={handleEdit}/>
                        ))
                    ) : (
                        <p className='text-center w-full mt-3 text-blue-500 font-bold'>{noResults ? 'No se encontraron resultados.' : 'No hay publicaciones.'}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Listado;