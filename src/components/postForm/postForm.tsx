import { useState, useEffect } from 'react';
import { Post } from '../../app/api';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onCreateOrUpdate: (postData: Post) => void;
    selectedPost?: Post | null;
}

export const PostForm: React.FC<Props> = ({ isOpen, onClose, onCreateOrUpdate, selectedPost }) => {
    const initialPostData: Post = { id: 0, userId: 0, title: '', body: '', imageUrl: '' };
    const [postData, setPostData] = useState<Post>(initialPostData);

    useEffect(() => {
        if (selectedPost) {
            setPostData(selectedPost);
        } else {
            setPostData(initialPostData);
        }
    }, [selectedPost]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (postData) {
            onCreateOrUpdate(postData);
            onClose();
            setPostData(initialPostData);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (postData) {
            setPostData({ ...postData, [name]: value });
        }
    };

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`} style={{ zIndex: 100 }}>
            <div className="flex items-center justify-center min-h-screen px-4 py-12 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
                            <input type="text" id="title" value={postData?.title || ''} onChange={handleChange} className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="body" className="block text-sm font-medium text-gray-700">Contenido</label>
                            <textarea id="body" value={postData?.body || ''} onChange={handleChange} className="mt-1 p-3 block w-full h-32 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                        </div>
                        <div className="text-right">
                            <button type="button" onClick={onClose} className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cancelar</button>
                            <button type="submit" className="ml-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Publicar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
