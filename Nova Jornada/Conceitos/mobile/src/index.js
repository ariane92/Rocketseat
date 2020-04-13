import React, {useState, useEffect} from 'react';
import api from './services/api';
import {SafeAreaView, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity} from 'react-native';

export default function App(){
    const [projects, setProjects] = useState([]);

    useEffect(() =>{
        api.get('projects').then(response =>{
            console.log(response.data);
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: 'Ariane Mateus'
        })

        setProjects([...projects, response.data])
    }
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({item: project}) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />
                <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
                    <Text style={styles.buttonText}>Adicionar Projeto</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        
    },

    project: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },

    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'

    },

    buttonText:{
        fontWeight: 'bold',
        fontSize: 16

    }


    
})