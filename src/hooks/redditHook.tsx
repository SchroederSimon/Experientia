import redditInterface from "../models/redditInterface";
import { useState, useEffect } from 'react';
import axios from 'axios';

export function useRedditPosts() {
    const [posts, setPosts] = useState<redditInterface[]>([]);
  
    useEffect(() => {
      async function fetchPosts() {
        try {
          const response = await axios.get('https://www.reddit.com/r/careerguidance.json?sort=top&t=day');
          setPosts(response.data.data.children.map((child: any) => child.data));
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchPosts();
    }, []);
  
    return posts;
  }