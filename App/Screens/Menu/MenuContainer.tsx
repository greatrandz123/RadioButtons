import React, { useEffect, useState } from 'react'
import MenuView from './Menu'
import apiResponse from '../../ApiResponse'
import { Rule, Menu, Item } from '../../Models'
import ApiResponse from '../../ApiResponse'

type Props = {

}

const MenuContainer = (props: Props) => {
    const [dataSource, setDataSource] = useState([])
    const [rules, setRules] = useState([])
    const [menus, setMenus] = useState([])
    const [selectedRadioButton, setSelectedRadioButton] = useState(null)

    useEffect(() => {
        const menus: Menu[] = apiResponse.menus.map((data) => {
            const items: Item[] = data.map((item) => ({ id: item.id, name: item.value}))
            return { items }
        })
        const rulesValues = Object.values(apiResponse.rules)
        const rules: Rule[] = Object.keys(apiResponse.rules).map((key, index) => {
            const rulesValue = rulesValues[index]

            const menuItems: Item[] = rulesValue.map(ruleValue => ({ id: `${ruleValue}` }))
            return ({ id: `${key}`, menuItems: menuItems })
        })
        
        setMenus(menus)
        setRules(rules)
        updateDataSource(menus)
    }, [apiResponse])

    const updateDataSource = (menus: Menu[]) => {
        const dataMenu = menus.map((menu: Menu) => {
            return ({ title: {  }, data: menu.items  })
        })
        setDataSource(dataMenu)
    }
    
    const onRadioButton = (id: String) => {
        const rule: Rule = rules.find((rule: Rule) => rule.id === id)
        if (rule) {
            const selectedMenus: Menu[] = menus.map((menu: Menu) => {
                const menuItems = menu.items.map((item: Item) => {
                    if (id)
                        return !rule.menuItems.find((ruleItem: Item) => ruleItem.id === item.id) ? item : []
                    return item
                }).flat()
                return ({ items: menuItems})
            })
            
            updateDataSource(selectedMenus)
        }
        setSelectedRadioButton(id)
    }

    return (
        <MenuView   dataSource={dataSource}
                    onRadioButton={onRadioButton}
                    selectedRadioButton={selectedRadioButton}
                    {...props} />
    )
}

export default MenuContainer