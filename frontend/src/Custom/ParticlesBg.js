import { Particles } from 'react-particles';

import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { VStack } from '@chakra-ui/layout';

import { COLORS } from '../data/constants';

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <VStack zIndex={-1}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: COLORS.app
            }
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: COLORS.particles
            },
            links: {
              color: COLORS.particles,
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce'
              },
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.1
            },
            shape: {
              type: 'square'
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
      />
    </VStack>
  );
};

export default ParticlesBg;