import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const Info1 = ({ route }) => {
  const { itemHeading, itemText, itemDate, itemDesc } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.itemHeading}>{itemHeading}</Text>
        <View style={styles.detailRow}>
          <MaterialIcons name="location-on" size={24} color="#007AFF" />
          <Text style={styles.label}>Venue:</Text>
          <Text style={styles.itemText}>{itemText}</Text>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome name="calendar" size={22} color="#007AFF" />
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.itemText}>{itemDate}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Ionicons name="document-text-outline" size={24} color="#007AFF" />
          <Text style={styles.label}>Description:</Text>
        </View>
        <Text style={styles.descriptionText}>{itemDesc}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 20,
  },
  itemHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
  itemText: {
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 5,
    textDecorationLine: 'underline',
    color: '#555',
  },
  descriptionContainer: {
    flexDirection: 'row'
  },
  descriptionText: {
    fontWeight: '400',
    fontSize: 18,
    marginTop: 5,
    color: '#555',
    textAlign: 'justify',
  },
});