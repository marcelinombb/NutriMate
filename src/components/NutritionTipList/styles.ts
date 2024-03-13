import styled from 'styled-components/native'

interface ChallengeBackground {
  width: number
}

export const ChallengeCard = styled.View<ChallengeBackground>`
    height: 195px;
    width: ${(props) => props.width - 20}px;
    margin: 0 10px;
    border-radius: 20px;
`

export const ChallengeTitle = styled.Text`
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold;
`

export const ChallengeDesc = styled.Text`
    font-size: 12px;
    color: #EDF1F7;
`
export const ChallengeMoreButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffff; 
    border-radius: 11px;
    width: 94px;
    height: 34px;
    margin-top: 10px;
`
