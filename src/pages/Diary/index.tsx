import React from 'react'
import NavBar from '../../components/common/NavBar'
import {
  CenterSubTitle,
  CenterTitle,
  Container,
  IndicatorContainer,
  Section,
  SideSubTitle,
  SideTitle
} from './styles'
import DefaultTitle from '../../components/common/DefaultTitle'
import SearchBar from 'src/components/common/SearchBar'
import RecipeCard from 'src/components/RecipeCard'
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import meal from '@images/breakfast-photo.jpg'
import PlusCircleIcon from '@icons/plusCircle.png'
import { MealPhoto } from 'src/components/RecipeCard/styles'

const Diary = () => {
  const data = new Array(0)
  return (
    <Container>
      <DefaultTitle fontSize={20} title="Diary" />
      <SearchBar />
      <IndicatorContainer>
        <Section>
          <SideTitle>300</SideTitle>
          <SideSubTitle>Eaten</SideSubTitle>
        </Section>
        <Section>
          <CenterTitle>2300</CenterTitle>
          <CenterSubTitle>Total Calories</CenterSubTitle>
        </Section>
        <Section>
          <SideTitle>2000</SideTitle>
          <SideSubTitle>Remaining</SideSubTitle>
        </Section>
      </IndicatorContainer>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <RecipeCard isLast={index === data.length - 1} height={74}>
              <MealPhoto source={meal} />
              <View
                style={{
                  flex: 1,
                  width: 'auto',
                  marginLeft: 15,
                  marginRight: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <View>
                  <Text style={{ fontWeight: 'medium', fontSize: 24 }}>
                    Breakfast
                  </Text>
                  <Text style={{ fontSize: 10 }}>23% / 412 kcal</Text>
                </View>
                <View style={{}}>
                  <TouchableOpacity>
                    <Image
                      source={PlusCircleIcon}
                      style={{ width: 35, height: 35 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </RecipeCard>
          )
        }}
      />
      <NavBar />
    </Container>
  )
}

export default Diary
