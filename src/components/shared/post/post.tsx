import Link from 'next/link';
import Image from 'next/image';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Post } from '../../../app/api';
import Swal from 'sweetalert2';

interface Props {
    post: Post;
    onDelete: (postId: number) => void;
    onEdit: (post: Post) => void;
}

export const PostComponent: React.FC<Props> = ({ post, onDelete, onEdit}) => {
    const handleDeleteClick = (postId: number) => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: `Deseas eliminar la publicación ${post.title}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if(result.isConfirmed) {
                onDelete(postId);
            }
        })
    };

    const handleEditClick = () => {
        onEdit(post)
    }

    return (
        <div key={post.id} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <div className='h-full flex flex-col justify-around bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden'>
                <div className='relative pb-4 overflow-hidden'>
                    <Image
                        src={post.imageUrl}
                        width={300}
                        height={250}
                        layout="intrinsic" alt="image post" />
                </div>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
                        <div className='flex'>
                            <FaEdit size={20}  className='text-gray-400 mr-2 hover:text-yellow-500 cursor-pointer' onClick={handleEditClick}/>
                            <FaTrash size={20} className='text-gray-400 mr-2 hover:text-red-600 cursor-pointer' onClick={() => handleDeleteClick(post.id)}/>
                        </div>
                    </div>
                    <h2 className="mt-2 mb-2 text-xl font-bold">{post.title}</h2>
                    <p className="text-gray-600.body">{post.body}</p>
                </div>
                <div className='p-4 flex flex-col justify-between flew-grow'>
                    <Link href={`/listado/${post.id}`} className='block w-full bg-white text-blue-500 border hover:bg-cyan-500 hover:text-white font-semibold py-2 text-center'>
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </div>
    )
}
