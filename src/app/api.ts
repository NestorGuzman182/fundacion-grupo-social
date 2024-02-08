export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    imageUrl: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = await response.json();
        const postsWithImages: Post[] = await Promise.all(data.map(async (post: Post) => {
            const imageResponse = await fetch('https://source.unsplash.com/random/300x250');
            const imageUrl = imageResponse.url;
            return { ...post, imageUrl };
        }));
        return postsWithImages;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Error fetching posts');
    }
}

export const fetchPost = async (postId: number): Promise<Post> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await response.json();
        const imageResponse = await fetch('https://source.unsplash.com/random/300x250');
        const imageUrl = imageResponse.url;
        const postWithImage: Post = { ...postData, imageUrl };
        return postWithImage;
    } catch (error) {
        throw new Error('Error fetching post')
    }
}

