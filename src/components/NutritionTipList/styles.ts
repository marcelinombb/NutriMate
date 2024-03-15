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
    margin-bottom: 5px;
`

export const ChallengeDesc = styled.View`
    display: flex; 
    flex-direction: row;
    align-items: center;
    gap: 5px;
    padding: 1px 0px;
`
export const ChallengeDescTitle = styled.Text`
    font-size: 12px;
    color: #EDF1F7;
`
export const ChallengeDescIcon = styled.Image.attrs({
  resizeMode: 'contain'
})`
    width: 13px; 
    height: 13px;
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
