'use client'
import { useState, useEffect } from 'react';
import { fetchPosts, Post } from '../api'


const AboutMe: React.FC = () => {

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold m-4 pl-4">Acerca de Mi</h1>
            <div className="container flex justify-between mr-4">
                <embed src="/NESTOR-GUZMAN_CV2024_02.pdf" type="application/pdf" width="100%" height="600px" />
            </div>
        </div>
    );
};

export default AboutMe;