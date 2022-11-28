<script>
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
  
  let controlsLayout = [
    'previousFrame',
    'playpause',
    'stop',
    'nextFrame',
    'progress',
    'frame',
    'loop',
    'spacer',
    'background',
    'snapshot',
    'zoom',
    'info',
  ];
  </script>

<LottiePlayer
src="https://assets5.lottiefiles.com/packages/lf20_GbN9Rd.json"
autoplay="{true}"
loop="{true}"
controls="{false}"
renderer="svg"
background="transparent"
height="{150}"
width="{150}"
controlsLayout="{controlsLayout}"
/>
