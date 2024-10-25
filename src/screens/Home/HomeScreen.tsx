import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import profilePhoto from '../../../assets/profilePhoto.jpeg'
import { styles } from './styles';

export function HomeScreen() {
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/felipe-ferraz-4b0145247/');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/FelipeFerraz98');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={profilePhoto} style={styles.profileImage} />
      </View>
      <View>
        <Text style={[styles.title]}>
          Felipe Ferraz
        </Text>
      </View>
      <View>
        <Text style={[styles.subTitle]}>
          Full Stack Developer Mobile and Web
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openLinkedIn}>
          <Ionicons
            name="logo-linkedin"
            color="white"
            size={24}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonText}>LINKEDIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openGitHub}>
          <Ionicons
            name="logo-github"
            color="white"
            size={24}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonText}>GITHUB</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}