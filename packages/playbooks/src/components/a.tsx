import React, { useState, useCallback } from 'react';
import { FlatList, StyleSheet, View, ListRenderItem } from 'react-native';
import { Appbar, Drawer, Provider as PaperProvider } from 'react-native-paper';
import { MD3Colors, Searchbar, Card, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import libraryBook from '../data/libraryBook.json';


interface Book {
    id: string;
    category: string;
    title: string;
    price: string;
    author: string;
    image: string;
    desc: string;
}

const renderBook: ListRenderItem<any> = ({ item, index }) => (
    <Card mode="contained" style={styles.bookCard}>
        <Card.Cover source={{ uri: `${item.image}?${index}` }} />
        <Card.Title
            titleVariant="titleMedium"
            subtitleVariant="bodyMedium"
            title={`${item.title}`}
            subtitle={`${item.author} | ${item.category}`}
        />
    </Card>
);


export default function AppbarAction() {
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchbar, setShowSearchbar] = useState(false);

    const onChangeSearch = useCallback((query: string) => {
        setSearchQuery(query);
        if (query === '') {
            setFilteredBooks([]);
        } else {
            const filtered = libraryBook.data.filter((book: Book) =>
                book.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredBooks(filtered);
        }
    }, []);

    const handleSearchPress = () => {
        setShowSearchbar(!showSearchbar);
        if (!showSearchbar) {
            setSearchQuery('');
            setFilteredBooks([]);
        }
    };

    return (
        <Appbar.Header style={styles.appBarContainer}>
            <Appbar.Action
                icon="menu"
                color={MD3Colors.primary20}
                size={25}
                onPress={() => { }} />
            <View style={styles.appBarRight}>
                <Appbar.Action
                    icon="cast-connected"
                    color={MD3Colors.primary20}
                    size={25}
                    onPress={() => { }} />
                <Appbar.Action
                    icon="magnify"
                    color={MD3Colors.primary20}
                    size={25}
                    onPress={handleSearchPress} />
                {/* {showSearchbar && (
                    <Searchbar
                        placeholder="Search..."
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        iconColor={MD3Colors.primary50}
                        style={styles.searchbar}
                    />
                )} */}
            </View>

            {/* <FlatList
                data={filteredBooks}
                renderItem={renderBook}
                ItemSeparatorComponent={() => <Divider style={styles.divider} />}
                keyExtractor={(item) => item.id.toString()}
            /> */}
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    appBarContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    appBarRight: {
        display: 'flex',
        flexDirection: 'row'
    },
    divider: {
        backgroundColor: 'transparent',
        height: 8,
    },
    bookCard: {
        flex: 0.5,
        margin: 5,
    },
    card: {
        marginHorizontal: 16,
        marginBottom: 8,
    },
    searchbar: {
        margin: 16,
    },
});