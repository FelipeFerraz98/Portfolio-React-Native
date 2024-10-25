import axios from 'axios';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  language: string | null;
  created_at: string;
}

/**
 * Função para buscar repositórios de um usuário no GitHub.
 * @param username - Nome de usuário do GitHub.
 * @returns Promise com os dados dos repositórios.
 */
export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await axios.get<GitHubRepo[]>(`https://api.github.com/users/${username}/repos`);
    
    // Ordenar repositórios por data de criação, do mais recente para o mais antigo
    const sortedRepos = response.data.sort((a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    return sortedRepos;
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    throw new Error('Não foi possível buscar os repositórios.');
  }
};
