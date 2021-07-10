import layoutStyles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

export const MediumCost = () => (
  <div className={`${layoutStyles.semaphoreInnerContainer} ${layoutStyles.yellowSemaphore}`}>
    <Image
      priority
      src="/images/face_thinking.png"
      className={utilStyles.borderCircle}
      height={128}
      width={108}
      alt={'ilustración de la cara de una persona pensando'}
    />

    <h1 className={utilStyles.heading2Xl}>Ni mucho ni poco</h1>
    <h2 className={utilStyles.headingXl}>Hora llana</h2>
  </div>
)
