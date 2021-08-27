import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  SectionList,
} from 'react-native'
import styles from './Styles'
import { Menu } from '../../Models'

type Props = {
    dataSource: Menu[]
    onRadioButton: (id: String) => void,
    selectedRadioButton: String,
}

const MenuView = (props: Props) => {

    const ListSectionHeaderComponent = ({ section: { title } }) => (
      <View style={styles.sections}>
          <Text>
              {/* {`${title.name}`} */}
          </Text>
      </View>
    )

    const drawingItem = ({ item }) => (
      <TouchableOpacity onPress={() => { props.onRadioButton(item.id) }} style={styles.radioButton}>
          <View style={[styles.radioCircle, { backgroundColor: (props.selectedRadioButton === item.id) ? 'orange' : '#EBECF150' }]} />
          <Text style={styles.radioText}>
              {`${item.name}`}
          </Text>
      </TouchableOpacity>
    )

    return (
      <SectionList   
            sections={props.dataSource}
            renderSectionHeader={ListSectionHeaderComponent}
            renderItem={drawingItem}
            ListFooterComponent={(<View style={styles.footer}/>)}
            keyExtractor={(item, index) => `flatlist-categories-${index}`}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
        />
    )
}

export default MenuView