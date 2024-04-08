import { Col, Row } from 'antd'
import CountUp from 'react-countup'
import styled from 'styled-components'

export const PanelGroupRow = styled(Row)`
  margin-top: 1.8rem;
`

export const CardPanelCol = styled(Col)`
  margin-bottom: 3.2rem;
`

export const CardPanel = styled.div`
  height: 10.8rem;
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
`

export const CardPanelIconWrapper = styled.div`
  float: left;
  margin: 1.4rem 0 0 1.4rem;
  padding: 1.6rem;
  transition: all 0.38s ease-out;
  border-radius: 6px;
`

export const CardPanelIcon = styled.div`
  float: left;
  font-size: 4.8rem;
`

export const CardPanelDescription = styled.div`
  float: right;
  font-weight: bold;
  margin: 2.4rem;
  margin-left: 0rem;
`

export const CardPanelText = styled.p`
  line-height: 1.8rem;
  color: rgba(0, 0, 0, 0.45);
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
`

export const CardPanelNum = styled(CountUp)`
  font-size: 2rem;
`
