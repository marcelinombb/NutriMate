import React from 'react'
import { Container, ProductImage } from './styles'
import { FlatList, type ListRenderItem } from 'react-native'

export interface Image {
  url: string
}

export interface CarouselProps {
  images: Image[]
}

const Carousel = ({ images }: CarouselProps) => {
  const renderItem: ListRenderItem<Image> = ({ item }) => {
    return <ProductImage source={{ uri: item.url }} />
  }

  return (
    <>
      <Container>
        <FlatList
          data={images}
          keyExtractor={(item) => item.url}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToAlignment={'start'}
          scrollEventThrottle={16}
          decelerationRate={'fast'}
        />
      </Container>
    </>
  )
}

export default Carousel
