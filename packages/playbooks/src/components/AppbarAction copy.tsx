import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import { Appbar, Drawer, Provider as PaperProvider } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function AppbarAction() {
    const navigation = useNavigation();
    return (
        <Appbar.Header style={styles.appBarContainer}>
            <Appbar.Action
                icon="menu"
                color={MD3Colors.primary20}
                size={25}
                onPress={()=>{}} />
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
                    onPress={() => { }} />
            </View>
        </Appbar.Header>
    )
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
});
