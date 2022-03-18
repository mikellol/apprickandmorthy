import { SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import { getCharactersApi } from '../api/characters';
import CharacterList from "../components/CharacterList";

export default function CharactersScreen({navigation}){
    const [characters, setCharacters] = useState([]);
    const [filterData, setFilterData] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions:{
                placeholder: "Search Character",
                onChangeText: (event)=>{
                    handleSearch(event.nativeEvent.text);
                },
            },
        });
        fetchCharacter();
    });
    
    const fetchCharacter = async () =>{
        const response = await getCharactersApi();
        setCharacters(response);
        setLoading(false);
    };

    const handleSearch = (text) =>{
        setFilterData(text);
    };

    const filteredCharacters = useMemo(() =>
        characters.filter((character)=>{
            return character.name.toLowerCase().includes(filterData.toLowerCase());
        }), 
        [characters, filterData]
    );
    
    return ( 
        <SafeAreaView style={styles.container}>
            {loading ?
                <SafeAreaView style={[styles.container__indicator, styles.horizontal]}> 
                    <ActivityIndicator size={"large"} color={"#54DB33"}/>
                </SafeAreaView>
                :
                <SafeAreaView>
                    <CharacterList
                        characters={filteredCharacters}
                        navigation={navigation}
                    />
                </SafeAreaView>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container__indicator: {
        flex: 1,
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    container: {
        height: "100%",
        paddingBottom: 15,
        backgroundColor: "#24282f",
    },
});
