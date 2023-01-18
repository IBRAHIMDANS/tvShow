import { FontAwesome } from '@expo/vector-icons';
import { loadAsync } from 'expo-font';
import { useEffect, useState } from 'react';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await preventAutoHideAsync();
        // Load fonts
        await loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await hideAsync();
      }
    }

    void loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
