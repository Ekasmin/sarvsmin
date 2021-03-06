import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import Data from '../data/catalogue'

const ListHorizontal = ({ ListTitle, renderItem }) => {

    return (
        <View style={styles.ListContainerHoriz}>
            <Text style={styles.ListTitle}>{ListTitle}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default ListHorizontal


export const ListVertical = ({ ListTitle, renderItem }) => {

    return (
        <View style={styles.ListContainerVert}>
            {ListTitle && <Text style={styles.ListTitle}>{ListTitle}</Text>}
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    ListContainerHoriz: {
        flexDirection: "column",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    ListTitle: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 20,
    },
    ListContainerVert: {
        flex: 1,
        padding: 20,
        marginHorizontal: 16,
    },
})

