import React from 'react'
import { 
  View,
  Text,
  SectionList,
} from 'react-native'

type Props = {

}

const Menu = (props: Props) => {

    const objects = {
      menus: [
        // first group of radio-buttons
        [
          { id: '101', value: 'Vegetarian' },
          { id: '102', value: 'Nut allergy' },
          { id: '103', value: 'Halal' }
        ],
        // second group of radio-buttons
        [
          { id: '201', value: 'Cashew chicken' },
          { id: '202', value: 'Sweet and sour pork' },
          { id: '203', value: 'Stir fried Tofu' },
          { id: '204', value: 'Vegetable fried rice' },
          { id: '205', value: 'Pad Thai' },
          { id: '206', value: 'Massaman beef' },
        ],
        // third group of radio-buttons
        [
          { id: '301', value: 'Peanut sauce' },
          { id: '302', value: 'Oyster sauce' },
          { id: '303', value: 'Vegetable spring rolls' },
          { id: '304', value: 'Steamed rice' },
        ],
      ],
      rules: {
        // 'Vegetarian' is NOT compatible with 'Cashew chicken', 'Sweet and sour pork', 'Massaman beef', 'Oyster sauce'
        101: [201, 202, 206, 302], 
        // 'Nut allergy' is NOT compatible with 'Cashew chicken', 'Peanut sauce',
        102: [201, 301], 
        // 'Halal' is NOT compatible with 'Sweet and sour pork',
        103: [202], 
        // 'Vegetable fried rice' is NOT compatible with 'Steamed rice' (you don't need more rice... carb overload),
        204: [304],
        // 'Pad thai' is NOT compatible with 'Steamed rice' (Pad thai comes with noodles),
        205: [304],
      }
    }
    
    const menuItems = objects.menus.flat()
    const rulesValues = Object.values(objects.rules)
    const sectionList = Object.keys(objects.rules).map((key, index) => {
      const rulesValue = rulesValues[index]
      const menus = menuItems.filter((menu) => !(rulesValue.find((rule) => `${rule}` === menu.id)) &&  menu.id !== `${key}` )
      const menuRule = menuItems.find(menu => menu.id === `${key}`)
      return ({ title: { id: key, name: menuRule.value, }, data: menus  })
    })

    const ListSectionHeaderComponent = ({ section: { title } }) => (
      <View style={{ flex: 1, backgroundColor: 'yellow', padding: 10, }}>
          <Text>
              {`${title.name}`}
          </Text>
      </View>
    )

    const drawingItem = ({ item }) => (
      <View style={{ flex: 1, flexDirection: 'row', padding: 10, }}>
          <View style={{ borderRadius: 12, 
                      height: 20, 
                      width: 20, 
                      left: 5, borderWidth: 1,
                      borderColor: 'black', 
                      backgroundColor: '#EBECF150', }} />
          <Text style={{ paddingLeft: 15, }}>
              {`${item.value}`}
          </Text>
      </View>
    )

    return (
      <SectionList   
            sections={sectionList}
            renderSectionHeader={ListSectionHeaderComponent}
            renderItem={drawingItem}
            ListFooterComponent={(<View style={{ height: 50, }}/>)}
            keyExtractor={(item, index) => `flatlist-categories-${index}`}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
        />
    )
}

export default Menu