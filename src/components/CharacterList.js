import { FlatList, StyleSheet,} from "react-native";
import React from 'react'
import Character from "./Character"

export default function CharacterList({ characters, navigation }) {
    return(
        <FlatList
            data = {characters}
            numColumns = {1}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle={styles.flatListContentContainer}
            keyExtractor={(character)=>String(character.id)}
            renderItem={({item}) => <Character character = {item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal: 5,
        backgroundColor:"#24282f"
    }
})
