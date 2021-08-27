import React from 'react'
import { 
  View,
  Text,
  TouchableOpacity,
  SectionList,
} from 'react-native'
import { Menu } from '../../Models'

type Props = {
    dataSource: Menu[]
    onRadioButton: (id: String) => void,
    selectedRadioButton: String,
}

const MenuView = (props: Props) => {

    const ListSectionHeaderComponent = ({ section: { title } }) => (
      <View style={{ flex: 1, backgroundColor: 'yellow', padding: 10, }}>
          <Text>
              {/* {`${title.name}`} */}
          </Text>
      </View>
    )

    const drawingItem = ({ item }) => (
      <TouchableOpacity onPress={() => { props.onRadioButton(item.id) }} style={{ flex: 1, flexDirection: 'row', padding: 10, }}>
           <View style={{ borderRadius: 12, 
                      height: 20, 
                      width: 20, 
                      left: 5, borderWidth: 1,
                      borderColor: 'black', 
                      backgroundColor: (props.selectedRadioButton === item.id) ? 'orange' : '#EBECF150' }} />
          <Text style={{ paddingLeft: 15, }}>
              {`${item.name}`}
          </Text>
      </TouchableOpacity>
    )

    return (
      <SectionList   
            sections={props.dataSource}
            renderSectionHeader={ListSectionHeaderComponent}
            renderItem={drawingItem}
            ListFooterComponent={(<View style={{ height: 50, }}/>)}
            keyExtractor={(item, index) => `flatlist-categories-${index}`}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
        />
    )
}

export default MenuView