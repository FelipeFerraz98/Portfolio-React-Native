import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Linking } from "react-native";
import { fetchGitHubRepos } from "../../services/GitHubAPI";

import { styles } from "./styles";

// Images
import GitHubLogo from '../../../assets/ProjectsImages/GitHub.png'
import ecs from '../../../assets/ProjectsImages/ecslogo.png';
import ferraz from '../../../assets/ProjectsImages/FerrazDevelopment.png';
import pokedex from '../../../assets/ProjectsImages/pokedex.png';

interface Project {
  title: string;
  image: any;
  detail: string;
  url: string;
}

export const PortfolioScreen: React.FC = () => {
  const [repos, setRepos] = useState<Project[]>([]);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const username = "FelipeFerraz98";
        const data = await fetchGitHubRepos(username);
        
        // Mapeando os repositórios recebidos para o formato de Project
        const formattedRepos = data.map((repo: any) => ({
          title: repo.name,
          image: GitHubLogo,
          detail: `Linguagem: ${repo.language || "N/A"}`,
          url: repo.html_url,
        }));

        setRepos(formattedRepos);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      }
    };
    getRepos();
  }, []);

  const openLink = (url: string) => {
    // Utilize o Linking para abrir URLs no navegador padrão
    Linking.openURL(url);   
  };

  const projects: Project[] = [
    {
      title: 'ECS Marcenaria',
      image: ecs,
      detail: 'React Website',
      url: 'https://ecsmarcenaria.com.br/',
    },
    {
      title: 'Ferraz Development',
      image: ferraz,
      detail: 'React WebSite com GitHub API',
      url: 'https://github.com/FelipeFerraz98/Portfolio-Felipe-Ferraz',
    },
    {
      title: 'Pokedex',
      image: pokedex,
      detail: 'React WebSite com PokeAPI',
      url: 'https://felipeferraz98.github.io/Pokedex-React/#/',
    }
  ];

  const renderItem = ({ item }: { item: Project }) => (
    <TouchableOpacity style={styles.card} onPress={() => openLink(item.url)}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.cardDetail}>{item.detail}</Text>
      <Text style={styles.cardDetail}>Clique para acessar!</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[...projects, ...repos]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};