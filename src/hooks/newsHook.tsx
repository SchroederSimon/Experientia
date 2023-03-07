
import { articleInterface } from "../models/articlesInterface";
import axios from 'axios';


export function newsAPI() {
    const apiKey = process.env.API_KEY;
    const baseUrl = 'https://newsapi.org/v2';
  
    async function getTopHeadlines(): Promise<articleInterface[]> {
      const url = `${baseUrl}/everything?q=(education OR job market OR career OR degree) AND (job OR employment OR offer)&sortBy=relevancy&apiKey=${apiKey}`;
      const response = await axios.get(url);
      return response.data.articles;
    }
  
    return { getTopHeadlines };
  }