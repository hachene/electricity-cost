import layoutStyles from '@src/styles/layout.module.css'
import utilStyles from '@src/styles/utils.module.css'
import Image from 'next/image'

export const MediumCost = () => (
  <div className={`${layoutStyles.semaphoreContainer} ${layoutStyles.yellowSemaphore}`}>
    <Image
      priority
      src="/images/face_thinking_person_woman.png"
      className={utilStyles.borderCircle}
      height={128}
      width={108}
      alt={'ilustración de una moneda'}
    />

    <h1 className={utilStyles.heading2Xl}>Ni mucho ni poco</h1>
    <h2 className={utilStyles.headingXl}>Hora llana</h2>
  </div>
)
