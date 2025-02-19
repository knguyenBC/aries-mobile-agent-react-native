import React from 'react'
import { Modal, StyleSheet, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useAnimatedComponents } from '../../contexts/animated-components'
import { useTheme } from '../../contexts/theme'

const LoadingModal: React.FC = () => {
  const { height } = useWindowDimensions()
  const { LoadingTheme } = useTheme()
  const { LoadingIndicator } = useAnimatedComponents()
  const styles = StyleSheet.create({
    container: {
      minHeight: height,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: LoadingTheme.backgroundColor,
    },
  })

  return (
    <Modal visible={true} transparent={true}>
      <SafeAreaView style={[styles.container]}>
        <LoadingIndicator />
      </SafeAreaView>
    </Modal>
  )
}

export default LoadingModal
