/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React, { useState, type ReactNode } from 'react'
import CaloriesIcon from '@icons/fire-p.png'
import ProteinIcon from '@icons/muscle-p.png'
import TimeIcon from '@icons/time-p.png'
import {
  type ImageSourcePropType,
  TouchableOpacity,
  View,
  Text
} from 'react-native'
import {
  Card,
  Container,
  ContainerMacro,
  MacroIcon,
  MacroNumber,
  MealPhoto,
  MenuItem,
  MenuText,
  ModalContent,
  ModalOverlay,
  TitleCard
} from './styles'

export interface RecipeCardProps {
  _id: string
  isLast: boolean
  height: number
  children: ReactNode
  title: string
  calories: string
  proteins: string
  timePrepare: string
  image: ImageSourcePropType
  onPress?: () => void
}

const RecipeCardMeal = (props: Partial<RecipeCardProps>) => {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={props.onPress}>
      <Container isLast={props.isLast}>
        <Card height={props.height}>
          <MealPhoto source={props.image} />
          <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <TitleCard>{props.title}</TitleCard>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <ContainerMacro>
                <MacroIcon source={ProteinIcon} />
                <MacroNumber>{props.proteins}g</MacroNumber>
              </ContainerMacro>
              <ContainerMacro>
                <MacroIcon source={CaloriesIcon} />
                <MacroNumber>{props.calories}</MacroNumber>
              </ContainerMacro>
              <ContainerMacro>
                <MacroIcon source={TimeIcon} />
                <MacroNumber>{props.timePrepare}m</MacroNumber>
              </ContainerMacro>
            </View>
          </View>
          <View style={{ marginTop: 5, marginLeft: 30 }}>
            {/* Ícone do menu hambúrguer */}
            <TouchableOpacity onPress={toggleModal} style={{ paddingTop: 0 }}>
              <Text style={{ fontSize: 18 }}>☰</Text>
            </TouchableOpacity>

            {/* Modal para as opções Editar e Excluir */}
            {isModalVisible && (
              <>
                <ModalOverlay onPress={toggleModal} />
                <ModalContent>
                  <MenuItem onPress={() => alert('Editar')}>
                    <MenuText>Editar</MenuText>
                  </MenuItem>
                  <MenuItem onPress={() => alert('Excluir')}>
                    <MenuText>Excluir</MenuText>
                  </MenuItem>
                </ModalContent>
              </>
            )}
          </View>
        </Card>
      </Container>
    </TouchableOpacity>
  )
}

export default RecipeCardMeal
