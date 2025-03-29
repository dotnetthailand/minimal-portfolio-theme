import { string } from 'astro:schema';
import axios from 'axios';

type RepoResponse = {
  html_url: string,
  name: string,
}

export async function getLatestContributedRepos(username: string) {

  try {
    const result = await axios.get<RepoResponse[]>(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`);
    return result.data
  } catch (error) {
    console.log(error);
    return [];
  }

}
