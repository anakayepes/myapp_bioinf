import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explora la BioInformatica</ThemedText>
      </ThemedView>
      <ThemedText>Esta app contiene algo de informacion acerca de la bioinformatica</ThemedText>
      <Collapsible title="Informacion general">
        <ThemedText>
          Esta app tiene dos pantallas:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          El archivo del Layout en <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Aprende mas</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, y soporte web">
        <ThemedText>
          Puedes abrir este proyecto en Android, IOS y en la web.  Para abrir la version web, pressiona{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> en el terminal corriendo este proyecto.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Imagenes">
        <ThemedText>
          Para imagenes estaticas, usted oyede usar el <ThemedText type="defaultSemiBold">@2x</ThemedText> y{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffijos para proveer archivos para
          diferentes densidades de pantallas
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Aprenda mas</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Fuentes Personalizadas">
        <ThemedText>
          Abrir  <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> para ver como cargar{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            fuentes personalizadas como esta.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Aprenda Mas</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Componentes de los modos claro y oscuro">
        <ThemedText>
          Esta plantilla tiene un soporte para modo claro y oscuro. La{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> Esto le permite  inspeccionar
          cual es el esquema de color actual del usuario, y asi puede ajustar los colores del UI usuario en consecuenciaand.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Aprenda mas</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animationes">
        <ThemedText>
          Esta plantilla incluye un ejemplo de un componente animado.  El{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> componente usa
          el poderoso <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> libreria
          para crear una animacion de una mano ondulante que saluda.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              El <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              componente provee un efecto parallax para la imagen del encabezado.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
